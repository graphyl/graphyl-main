import type { NextPage } from 'next'
import Head from 'next/head'
import { Services, CarouselComp, About, TechStack, ContactForm } from '../components'
import HowWeWork from '../components/about/HowWeWork'
import Contact from './contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarouselComp />
      <article>
        <div className="container mx-auto space-y-20">
          {/* <About /> */}
          <Services />
          <HowWeWork />

          <TechStack isHome={true} />
           {/* @ts-ignore */}
          <Contact FaqRequired={false}/>
        </div>
      </article>
    </>
  )
}

export default Home
