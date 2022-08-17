import React, { useState } from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/icon-green.png"
import ForgotPasswordForm from "./ForgotPasswordForm.component"

const ForgotPasswordPage = () => {
  const [sent, setSent] = useState(false)

  return (
    <div>
      {sent ? (
        <div className="mt-8">Success! Check your email for a password reset link.</div>
      ) : (
        <div>
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
