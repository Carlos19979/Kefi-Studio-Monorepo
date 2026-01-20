"use client"

import { Popover, Transition } from "@headlessui/react"
// import { Button } from "@medusajs/ui" 
import { Button } from "@modules/common"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import { LocalizedClientLink } from "@modules/common"
import Thumbnail from "@modules/products/components/thumbnail"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-50 hidden md:block"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <Popover.Button className="flex items-center justify-center size-10 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors relative">
          <LocalizedClientLink
            className="flex items-center justify-center w-full h-full"
            href="/cart"
            data-testid="nav-cart-link"
          >
            <span className="material-symbols-outlined text-[20px] font-light">
              shopping_bag
            </span>
            {totalItems > 0 && (
              <span className="absolute top-2 right-2 size-1.5 bg-kefi-maroon rounded-full"></span>
            )}
          </LocalizedClientLink>
        </Popover.Button>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-kefi-beam/95 backdrop-blur-md bg-white border border-kefi-border w-[420px] text-kefi-brown shadow-xl"
            data-testid="nav-cart-dropdown"
          >
            <div className="p-6 flex items-center justify-center border-b border-kefi-border">
              <h3 className="text-xl font-serif text-kefi-maroon">Your Shopping Bag</h3>
            </div>
            {cartState && cartState.items?.length ? (
              <>
                <div className="overflow-y-scroll max-h-[402px] px-6 py-6 grid grid-cols-1 gap-y-8 no-scrollbar">
                  {cartState.items
                    .sort((a, b) => {
                      return (a.created_at ?? "") > (b.created_at ?? "")
                        ? -1
                        : 1
                    })
                    .map((item) => (
                      <div
                        className="grid grid-cols-[80px_1fr] gap-x-4"
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/products/${item.variant?.product?.handle}`}
                          className="w-full aspect-[4/5] relative overflow-hidden"
                        >
                          <Thumbnail
                            thumbnail={item.variant?.product?.thumbnail}
                            images={item.variant?.product?.images}
                            size="full"
                          />
                        </LocalizedClientLink>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex flex-col flex-1">
                            <div className="flex items-start justify-between">
                              <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
                                <h3 className="font-serif text-lg text-kefi-brown overflow-hidden text-ellipsis">
                                  <LocalizedClientLink
                                    href={`/products/${item.variant?.product?.handle}`}
                                    data-testid="product-link"
                                  >
                                    {item.title}
                                  </LocalizedClientLink>
                                </h3>
                                <LineItemOptions
                                  variant={item.variant}
                                  data-testid="cart-item-variant"
                                  data-value={item.variant}
                                />
                                <span
                                  className="text-xs text-kefi-taupe mt-1"
                                  data-testid="cart-item-quantity"
                                  data-value={item.quantity}
                                >
                                  Qty: {item.quantity}
                                </span>
                              </div>
                              <div className="flex justify-end">
                                <LineItemPrice item={item} style="tight" />
                              </div>
                            </div>
                          </div>
                          <DeleteButton
                            id={item.id}
                            className="mt-1 text-xs uppercase tracking-wider text-kefi-taupe hover:text-kefi-maroon"
                            data-testid="cart-item-remove-button"
                          >
                            Remove
                          </DeleteButton>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="p-6 flex flex-col gap-y-4 text-small-regular bg-kefi-paper/30 border-t border-kefi-border">
                  <div className="flex items-center justify-between">
                    <span className="text-kefi-brown font-medium">
                      Subtotal{" "}
                      <span className="font-normal text-kefi-taupe">(excl. taxes)</span>
                    </span>
                    <span
                      className="text-base-regular text-kefi-brown"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>
                  <LocalizedClientLink href="/cart" passHref>
                    <Button
                      className="w-full h-12 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark uppercase tracking-[0.15em] text-xs font-bold rounded-none"
                      data-testid="go-to-cart-button"
                    >
                      Process to Checkout
                    </Button>
                  </LocalizedClientLink>
                </div>
              </>
            ) : (
              <div>
                <div className="flex py-16 flex-col gap-y-6 items-center justify-center">
                  <div className="text-kefi-taupe/50 text-6xl font-light">
                    0
                  </div>
                  <span className="text-kefi-brown font-serif italic text-lg">Your bag is empty.</span>
                  <div>
                    <LocalizedClientLink href="/store">
                      <>
                        <span className="sr-only">Go to all products page</span>
                        <Button
                          onClick={close}
                          className="bg-transparent text-kefi-maroon border border-kefi-maroon hover:bg-kefi-maroon hover:text-white uppercase tracking-widest text-xs px-8 py-3"
                        >
                          Explore Collection
                        </Button>
                      </>
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
