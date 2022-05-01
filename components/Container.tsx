import React from 'react'
import { TChildren } from '../interfaces'

function Container({ children }: TChildren) {
  return (
    <>
      <section className="mx-auto max-w-[1400px] ">{children}</section>
    </>
  )
}

export default Container
