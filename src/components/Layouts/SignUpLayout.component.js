import React from "react"
import { Outlet } from "react-router-dom"

const SignUpLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-[280px] bg-emerald-800">
      <Outlet />
    </div>
  )
}

export default SignUpLayout
