import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

const CartTemplate = async ({
  cart,
  customer,
  lang,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
  lang: Locale
}) => {
  const dict = await getDictionary(lang)
  const content = dict.cart

  return (
    <div className="py-12 small:py-24 bg-[#FCFBF9] min-h-[calc(100vh-64px)] border-t border-kefi-brown/5">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_400px] gap-x-16 lg:gap-x-24">
            <div className="flex flex-col gap-y-12">
              {!customer && (
                <div className="bg-white p-8 rounded-sm shadow-sm border border-kefi-brown/5">
                  <SignInPrompt dict={content} />
                </div>
              )}
              <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-kefi-brown/5">
                <ItemsTemplate items={cart?.items} />
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-32">
                {cart && cart.region && (
                  <div className="bg-white p-10 md:p-12 rounded-sm shadow-lg border border-kefi-brown/5 ring-1 ring-kefi-brown/5">
                    <Summary cart={cart as any} dict={content} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage dict={content} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
