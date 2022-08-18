import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

import logo from "../../assets/images/icon-white.png"

const Header = () => {
  const { handleSignOut } = useContext(AuthContext)

  return (
    <header className="py-8 px-2 bg-emerald-800 text-white">
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div className="flex direction-row items-center">
            <img src={logo} className="w-5" alt="" />
            <Link
              className="ml-2 text-xl sm:text-2xl md:text-3xl font-semibold"
              to="/dashboard"
            >
              Expensify
            </Link>
          </div>
          <button
            className="px-4 py-2 text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-700 font-semibold rounded transition-colors"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
