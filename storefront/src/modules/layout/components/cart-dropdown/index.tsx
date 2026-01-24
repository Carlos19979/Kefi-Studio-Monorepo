"use client"

import { Popover, Transition } from "@headlessui/react"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"
import { LocalizedClientLink } from "@modules/common"
import { HttpTypes } from "@medusajs/types"
import dynamic from "next/dynamic"

const CartDropdownContent = dynamic(() => import("./cart-dropdown-content"), {
  loading: () => <div className="p-6 h-[200px] flex items-center justify-center"><div className="w-6 h-6 border-b-2 border-kefi-maroon rounded-full animate-spin"></div></div>
})

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
      className="h-full z-50 block"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <Popover.Button className="flex items-center justify-center size-11 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors relative">
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
          as={Fragment}
          show={cartDropdownOpen}
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
            {/* Dynamic content loaded only when needed */}
            {cartDropdownOpen && cartState ? (
              <CartDropdownContent cartState={cartState} subtotal={subtotal} close={close} />
            ) : null}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
