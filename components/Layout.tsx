import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import { TChildren } from '../interfaces'
import Footer from './Footer'

function Layout({ children }: TChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
