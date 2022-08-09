import Head from 'next/head'
import React from 'react'
import { About, HowWeWork } from '../components'
import Brands from '../components/brands/Brands'
import Reviews from '../components/reviews/Reviews'

const about = () => {
  return (
    <>
      <Head>
        <title>Graphyl | About</title>
        <meta
          name="description"
          content="We are a software development and consultancy service. We help small to medium scale businesses to build their online presence. Come work with us | For dreamers by creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <About />
        <HowWeWork />
        <Brands />
        <div className="mw-container mt-20">
          <Reviews />
        </div>
      </div>
    </>
  )
}

export default about
