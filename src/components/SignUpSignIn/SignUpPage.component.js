import React from "react"
import { Link } from "react-router-dom"

import SignUpForm from "./SignUpForm.component"

const SignUpPage = () => (
  <div>
    <SignUpForm />
    <div className="mt-8">
      Already have an account?{" "}
      <Link className="underline hover:text-sky-800" to="/signin">
        Sign in
      </Link>
    </div>
  </div>
)

export default SignUpPage
