import type { NextPage } from 'next'
import Head from 'next/head'
import { Services, CarouselComp } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="text-center">
        <CarouselComp />
        <div className="px-8 lg:px-16 xl:px-24">
          <h2 className="text-3xl mt-5">Services</h2>
          <Services />
        </div>
      </article>
    </>
  )
}

export default Home
