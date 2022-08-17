import React from "react"
import { Outlet } from "react-router-dom"

import logo from "../../assets/images/icon-green.png"

const SignUpLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-[280px] bg-emerald-800">
      <div className="w-64 sm:w-96 bg-white px-8 py-12 rounded">
        <div className="flex direction-row items-center">
          <img src={logo} className="w-5" alt="" />
          <span className="text-4xl font-semibold pl-2">Expensify</span>
        </div>
        <div className="mt-2 text-semibold text-emerald-800">Take control of your spending</div>
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SignUpLayout
