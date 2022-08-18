import React, { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"

import TextField from "../../common/TextField.component"

const ForgotPasswordForm = ({ setSent }) => {
  const auth = getAuth()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const onEmailChange = (e) => {
    if (!!emailError) setEmailError("")
    setEmail(e.target.value)
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()

    if (!email) {
      setEmailError("Enter an email address")
      return
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSent(true)
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setEmailError("Invalid email address")
          return
        }
        if (error.code === "auth/user-not-found") {
          setEmailError("Email address not found")
          return
        }
        setEmailError(error.message)
      })
  }

  return (
    <form className="grid gap-4">
      <TextField
        error={!!emailError}
        helperText={emailError}
        label="Email"
        onChange={onEmailChange}
        type="email"
        value={email}
      />
      <button
        className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 font-semibold rounded transition-colors"
        onClick={handleForgotPassword}
      >
        Send Password Reset Email
      </button>
    </form>
  )
}

export default ForgotPasswordForm
