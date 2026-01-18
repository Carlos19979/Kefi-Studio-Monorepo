import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Kefi Studio account.",
}

export default async function Login({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <LoginTemplate dict={dict.account} />
}
