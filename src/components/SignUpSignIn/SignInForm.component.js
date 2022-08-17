import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import TextField from "../../common/TextField/TextField.component"

const SignInForm = () => {
  const navigate = useNavigate()
  const auth = getAuth()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const onEmailChange = (e) => {
    if (!!emailError) setEmailError("")
    setEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    if (!!passwordError) setPasswordError("")
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/dashboard")
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email address")
        return
      }
      if (error.code === "auth/user-disabled") {
        setEmailError("Your account has been disabled. Please contact us to re-activate your account.")
        return
      }
      if (error.code === "auth/user-not-found") {
        setEmailError("Email address not found")
        return
      }
      if (error.code === "auth/wrong-password") {
        setPasswordError("Incorrect password")
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
      <TextField
        error={!!passwordError}
        helperText={passwordError}
        label="Password"
        onChange={onPasswordChange}
        type="password"
        value={password}
      />
      <div className="flex flex-col">
        <button
          className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 font-semibold rounded transition-colors"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <Link className="mt-2 text-sm text-right underline hover:text-sky-800" to="/forgot-password">
          Forgot password?
        </Link>
      </div>
    </form>
  )
}
 
export default SignInForm
