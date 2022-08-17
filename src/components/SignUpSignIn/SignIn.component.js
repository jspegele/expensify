import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import TextField from "../../common/TextField/TextField.component"

import logo from "../../assets/images/icon-green.png"

const SignIn = () => {
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
    })
  }

  return (
    <div className="w-64 sm:w-96 bg-white px-8 py-12 rounded">
      <div className="flex direction-row items-center">
        <img src={logo} className="w-5" alt="" />
        <span className="text-4xl font-semibold pl-2">Expensify</span>
      </div>
      <div className="mt-8">
        Take control of your spending
      </div>
      <div className="mt-8">
        <form className="grid gap-4">
          <TextField
            error={!!emailError}
            helperText={emailError}
            label="Email"
            onChange={onEmailChange}
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
          <button
            className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 font-semibold rounded transition-colors"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="mt-8">
        Don't have an account? <Link className="underline" to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}
 
export default SignIn
