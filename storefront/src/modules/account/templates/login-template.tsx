"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = ({ dict }: { dict: any }) => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="w-full flex justify-center px-8 py-16">
      {currentView === "sign-in" ? (
        <Login setCurrentView={setCurrentView} dict={dict.login} />
      ) : (
        <Register setCurrentView={setCurrentView} dict={dict.register} />
      )}
    </div>
  )
}

export default LoginTemplate
