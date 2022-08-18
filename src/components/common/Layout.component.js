import React from "react"
import { Outlet } from "react-router-dom"

import Header from "./Header.component"
import Footer from "./Footer.component"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-[280px]">
      <div className="grow-0">
        <Header />
      </div>
      <div className="grow container mx-auto py-10">
        <Outlet />
      </div>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
