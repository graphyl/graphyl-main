import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>Graphyl</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainLayoutDiv">
        <Navbar />
        <section style={{width:'100%'}}>

         {children}
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Layout
