import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import FavArtists from '../components/Homepage/FavArtists'
import Hero from '../components/Homepage/Hero'
import LatestRelease from '../components/Homepage/LatestRelease'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />

        {/* favourite artist section */}

        <FavArtists />
        <LatestRelease />
      </main>
    </>
  )
}

export default Home