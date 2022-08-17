import React, { useState } from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/icon-green.png"
import ForgotPasswordForm from "./ForgotPasswordForm.component"

const ForgotPasswordPage = () => {
  const [sent, setSent] = useState(false)

  return (
    <div className="w-64 sm:w-96 bg-white px-8 py-12 rounded">
      <div className="flex direction-row items-center">
        <img src={logo} className="w-5" alt="" />
        <span className="text-4xl font-semibold pl-2">Expensify</span>
      </div>
      <div className="mt-8">Take control of your spending</div>
      {sent ? (
        <div className="mt-16">Success! Check your email for a password reset link.</div>
      ) : (
        <div className="mt-8">
          <ForgotPasswordForm setSent={setSent} />
        </div>
      )}
      <div className="mt-8">
        Take me back to{" "}
        <Link className="underline hover:text-sky-800" to="/signup">
          sign in
        </Link>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
