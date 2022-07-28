import Head from 'next/head'
import React from 'react'
import { About, HowWeWork } from '../components'

const about = () => {
  return (
    <>
      <Head>
        <title>Graphyl | About</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
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
