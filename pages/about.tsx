import Head from 'next/head'
import React from 'react'
import { About, HowWeWork } from '../components'

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
    </div>
    </>
  )
}

export default about
