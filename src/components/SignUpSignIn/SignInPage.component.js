import React from "react"
import { Link } from "react-router-dom"

import SignInForm from "./SignInForm.component"

import logo from "../../assets/images/icon-green.png"

const SignInPage = () => (
  <div className="w-64 sm:w-96 bg-white px-8 py-12 rounded">
    <div className="flex direction-row items-center">
      <img src={logo} className="w-5" alt="" />
      <span className="text-4xl font-semibold pl-2">Expensify</span>
    </div>
    <div className="mt-8">Take control of your spending</div>
    <div className="mt-8">
      <SignInForm />
    </div>
    <div className="mt-8">
      Don't have an account?{" "}
      <Link className="underline hover:text-sky-800" to="/signup">
        Sign Up
      </Link>
    </div>
  </div>
)

export default SignInPage
