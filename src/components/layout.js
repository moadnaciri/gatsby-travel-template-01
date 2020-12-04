import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
import { GlobalStyle } from "./Styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
