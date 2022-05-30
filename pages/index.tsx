import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components'
import 'antd/dist/antd.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <article className="text-center">
          <h1 className="text-4xl text-gray-600">Graphyl</h1>
          <p>Lets start the work boiz!</p>
        </article>
      </main>
    </>
  )
}

export default Home
