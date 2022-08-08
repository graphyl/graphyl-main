import type { NextPage } from 'next'
import Head from 'next/head'
import { Services, CarouselComp, TechStack } from '../components'
import HowWeWork from '../components/about/HowWeWork'
import Contact from './contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta
          name="description"
          content="We are a software development and consultancy service. We help small to medium scale businesses to build their online presence. Come work with us | For dreamers by creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarouselComp />
      <article>
        <div className="mw-container px-4 xl:px-0 space-y-20">
          {/* <About /> */}
          <Services />
          <HowWeWork />

          <TechStack isHome={true} />
          <Contact showHead={false} FaqRequired={false} />
        </div>
      </article>
    </>
  )
}

export default Home
