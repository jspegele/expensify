import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/icon-green.png"
import SignUpForm from "./SignUpForm.component"

const SignUpPage = () => (
  <div className="w-64 sm:w-96 bg-white px-8 py-12 rounded">
    <div className="flex direction-row items-center">
      <img src={logo} className="w-5" alt="" />
      <span className="text-4xl font-semibold pl-2">Expensify</span>
    </div>
    <div className="mt-8">Take control of your spending</div>
    <div className="mt-8">
      <SignUpForm />
    </div>
    <div className="mt-8">
      Already have an account?{" "}
      <Link className="underline hover:text-sky-800" to="/signin">
        Sign in
      </Link>
    </div>
  </div>
)

export default SignUpPage
