import { Button, Col, Row } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import notFoundImage from '../components/assets/images/404.png'
import useWindowSize from '../hooks/use-window-dimensions'

const Notfound = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <Head>
        <title>Graphyl | 404</title>
        <meta name="description" content="Graphy | For dreamers by creators." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={width > 1200 ? 'p-32' : 'p-8'}>
        <Row>
          <Col xs={24} md={12}>
            <Image src={notFoundImage} width={400} height={450} />
          </Col>
          <Col xs={24} md={12}>
            <div className="h-[100%] flex items-center space-y">
              <span className='space-y-6'>
                <h1 className={width > 1200 ? 'text-4xl' : 'text-2xl'}>
                  Looks like you are lost!
                </h1>
                <p>We're sorry, we cannot find what you are looking for.</p>
                <Button type="primary" className="bg-black border-black">
                  <Link href={'/'}>Go to home</Link>
                </Button>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Notfound
