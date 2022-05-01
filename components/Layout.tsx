import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import { TChildren } from '../interfaces'

function Layout({ children }: TChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
