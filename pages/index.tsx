import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import FavArtists from '../components/Homepage/FavArtists'
import Hero from '../components/Homepage/Hero'
import VideoHero from '../components/Homepage/VideoHero'
import LatestRelease from '../components/Homepage/LatestRelease'
import Merch from '../components/Homepage/Merch'
import UpcomingTour from '../components/Homepage/UpcomingTour'
import Hero2 from '../components/Homepage/Hero2'

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
        <VideoHero />
        <UpcomingTour />
        <Merch />

        <Hero2 />
      </main>
    </>
  )
}

export default Home
