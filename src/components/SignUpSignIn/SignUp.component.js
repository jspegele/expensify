import React, { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import TextField from "../../common/TextField/TextField.component"

import logo from "../../assets/images/icon-green.png"

const SignUp = () => {
  const auth = getAuth()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const onEmailChange = (e) => {
    if (!!emailError) setEmailError("")
    setEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    if (!!passwordError) setPasswordError("")
    setPassword(e.target.value)
  }
  const onConfirmPasswordChange = (e) => {
    if (!!passwordError) setPasswordError("")
    setConfirmPassword(e.target.value)
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setPasswordError("Password must be at least 6 characters")
          return
        }
        if (error.code === "auth/email-already-in-use") {
          setEmailError("Email is already in use")
          return
        }
        if (error.code === "auth/invalid-email") {
          setEmailError("Invalid email address")
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
      <div className="mt-8">Take control of your spending</div>
      <div className="mt-8">
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
            label="Password"
            onChange={onPasswordChange}
            type="password"
            value={password}
          />
          <TextField
            error={!!passwordError}
            helperText={passwordError}
            label="Confirm Password"
            onChange={onConfirmPasswordChange}
            type="password"
            value={confirmPassword}
          />
          <button
            className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 font-semibold rounded transition-colors"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="mt-8">
        Already have an account?{" "}
        <Link className="underline" to="/signin">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default SignUp
