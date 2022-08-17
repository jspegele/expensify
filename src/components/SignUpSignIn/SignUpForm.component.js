import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import TextField from "../../common/TextField/TextField.component"

const SignUpForm = () => {
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
  )
}
 
export default SignUpForm
