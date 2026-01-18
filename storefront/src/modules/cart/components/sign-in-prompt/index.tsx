import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = ({ dict }: { dict: any }) => {
  return (
    <div className="bg-transparent border border-kefi-border/40 p-8 flex items-center justify-between group hover:border-kefi-maroon/20 transition-colors duration-500">
      <div>
        <Heading level="h2" className="text-xl md:text-2xl font-serif text-kefi-brown">
          {dict.signin_title}
        </Heading>
        <Text className="text-kefi-taupe/80 text-sm md:text-base font-light mt-1">
          {dict.signin_desc}
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <button className="h-12 px-8 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 shadow-sm hover:shadow-md" data-testid="sign-in-button">
            {dict.signin_button}
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
