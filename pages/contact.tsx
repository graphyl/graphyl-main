import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { ContactForm } from '../components'
const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Contact</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/graphyl?embed=true"
      ></div>

      <Script
        type="text/javascript"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      ></Script>
    </>
  )
}

export default Contact
