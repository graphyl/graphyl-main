import type { NextPage } from 'next'
import Head from 'next/head'
import CarouselComp from '../components/CarouselComp'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="text-center">
        <CarouselComp/>
      </article>
    </>
  )
}

export default Home
