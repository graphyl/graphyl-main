import type { NextPage } from 'next'
import Head from 'next/head'
import { Services, CarouselComp, About } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="text-center !-mt-8">
        <CarouselComp />
        <div className="container mx-auto px-6 lg:px-0">
          <About />
          <Services />
        </div>
      </article>
    </>
  )
}

export default Home
