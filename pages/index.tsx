import type { NextPage } from 'next'
import Head from 'next/head'
import {CarouselComp} from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Home</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="text-center">
        <CarouselComp/>
        <div className="container">
          <h2 className='text-3xl mt-5'>
            Services
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit autem dolorum officiis. Deserunt id omnis ex consequatur temporibus ipsam facilis iusto non laboriosam cumque.
          </p>
          </div>  
      </article>
    </>
  )
}

export default Home
