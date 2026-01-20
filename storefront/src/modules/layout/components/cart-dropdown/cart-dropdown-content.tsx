"use client"

import { Button } from "@modules/common"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import { LocalizedClientLink } from "@modules/common"
import Thumbnail from "@modules/products/components/thumbnail"

interface CartDropdownContentProps {
    cartState: HttpTypes.StoreCart
    subtotal: number
    close: () => void
}

const CartDropdownContent = ({
    cartState,
    subtotal,
    close,
}: CartDropdownContentProps) => {
    return (
        <>
            <div className="p-6 flex items-center justify-center border-b border-kefi-border">
                <h3 className="text-xl font-serif text-kefi-maroon">Your Shopping Bag</h3>
            </div>
            {cartState && cartState.items?.length ? (
                <>
                    <div className="overflow-y-scroll max-h-[402px] px-6 py-6 grid grid-cols-1 gap-y-8 no-scrollbar">
                        {cartState.items
                            .sort((a, b) => {
                                return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
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
                                <span className="font-normal text-kefi-taupe">
                                    (excl. taxes)
                                </span>
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
                        <div className="text-kefi-taupe/50 text-6xl font-light">0</div>
                        <span className="text-kefi-brown font-serif italic text-lg">
                            Your bag is empty.
                        </span>
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
        </>
    )
}

export default CartDropdownContent
