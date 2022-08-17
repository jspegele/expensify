import React from "react"
import { Link } from "react-router-dom"

import SignInForm from "./SignInForm.component"

const SignInPage = () => (
  <div>
    <SignInForm />
    <div className="mt-8">
      Don't have an account?{" "}
      <Link className="underline hover:text-sky-800" to="/signup">
        Sign Up
      </Link>
    </div>
  </div>
)

export default SignInPage
