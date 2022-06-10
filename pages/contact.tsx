import { Col, Row, Tabs } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { ContactForm } from '../components'

const { TabPane } = Tabs
const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Graphyl | Contact</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col xs={24} className="text-center">
          <h1 className="text-biscuit text-5xl text-stroke-primary">
            Contact Graphyl
          </h1>
          <p className="text-center">
            Reach out to our team of expert, we would be very happy to guide
            you.
          </p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1" centered animated={true} className="mt-16">
        <TabPane tab={<p className="uppercase">Contact Via Email</p>} key="1">
          <ContactForm />
        </TabPane>
        <TabPane
          tab={<p className="uppercase">Schedule a meeting</p>}
          key="2"
          active
        >
          <div
            className="meetings-iframe-container"
            data-src="https://meetings-eu1.hubspot.com/graphyl?embed=true"
          ></div>
          <Script
            type="text/javascript"
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
          ></Script>
        </TabPane>
      </Tabs>
    </>
  )
}

export default Contact
