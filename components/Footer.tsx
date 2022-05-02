import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      {/* <Container> */}
      <section className="bg-zinc-900 ">
        <Container>
          <section className="flex flex-wrap py-16 px-3 text-zinc-100">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <Link href="/" passHref>
                {/* logo */}
                <a className="cursor-pointer text-3xl font-semibold text-zinc-100 md:text-4xl">
                  RAWLABAEL
                </a>
              </Link>
            </div>

            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <h4 className="flex items-center">
                <span className="font-xl mb-2 flex text-xl">
                  rawlabels@example.com
                </span>{' '}
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </h4>
              <p className="text-zinc-300">
                Book world-renowned and rising music artists, DJs, producers.
              </p>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <h4 className="flex items-center">
                <span className="font-xl mb-2 flex text-xl">
                  rawlabels@example.com
                </span>{' '}
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </h4>
              <p className="text-zinc-300">
                Book world-renowned and rising music artists, DJs, producers.
              </p>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <h4 className="flex items-center">
                <span className="font-xl mb-2 flex text-xl">
                  rawlabels@example.com
                </span>{' '}
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </h4>
              <p className="text-zinc-300">
                Book world-renowned and rising music artists, DJs, producers.
              </p>
            </div>
          </section>
        </Container>
      </section>
      <div className="w-full bg-lime-400 py-2 px-3 text-sm ">
        <Container>
          {' '}
          <p className="font-semibold text-black">
            2022 RAWLABEL, All Rights Reserved.
          </p>
        </Container>
      </div>
      {/* </Container> */}
    </footer>
  )
}

export default Footer
