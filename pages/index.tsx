import type { NextPage } from 'next'
import Head from 'next/head'
import { Services, CarouselComp, About } from '../components'
import HowWeWork from '../components/about/HowWeWork'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <CarouselComp />
      <article >
        <div className="container mx-auto px-6 lg:px-0">
          {/* <About /> */}
          <Services />
          <HowWeWork />
        </div>
      </article>
    </>
  )
}

export default Home
