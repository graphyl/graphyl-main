import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="text-center">
        <h1 className="text-4xl text-gray-600">Graphyl</h1>
        <p>Lets start the work boiz!</p>
      </article>
    </>
  )
}

export default Home
