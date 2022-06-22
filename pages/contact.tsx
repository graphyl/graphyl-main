import { Col, Row, Tabs } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { ContactForm, Faq } from '../components'

const { TabPane } = Tabs
const Contact: NextPage = () => {
  return (
    <div className="my-10">
      <Head>
        <title>Graphyl | Contact</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <Row>
          <Col xs={24} className="text-center space-y-4">
            <h1 className="inline-block	text-4xl mb-4 relative title-effect text-gray">
              Contact Graphyl
            </h1>
            <p className="text-center text-gray">
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

        <div className="mt-20">
          <Faq />
        </div>
      </div>
    </div>
  )
}

export default Contact
