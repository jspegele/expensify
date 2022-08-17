import React from 'react'

import Header from "../Header/Header.component"
import Footer from "../Footer/Footer.component"

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen min-w-[280px]">
      <div className="grow-0">
        <Header />
      </div>
      <div className="grow container mx-auto py-10">
        {props.children}
      </div>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  )
}
 
export default Layout
