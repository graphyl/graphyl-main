import React from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import Image from 'next/image'
import { GlobalOutlined } from '@ant-design/icons'
import useWindowSize from '../../hooks/use-window-dimensions'

import Link from 'next/link'
import HowWeWork from './HowWeWork'

import laiqueImage from '../assets/images/laique-img.jpg'

const { Meta } = Card

const About: React.FC = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="mt-16 w-full">
      <div className="text-center">
        <h2
          className={`${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } inline-block text-3xl relative title-effect`}
        >
          About
        </h2>
      </div>
      <p className="mx-auto max-w-2xl my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        dolore perspiciatis reiciendis, dignissimos maxime tenetur quo ut a modi
        eum nisi necessitatibus neque?
      </p>

      <div className="bg-black py-8">
        <div className="site-card-wrapper mt-4 mx-auto px-6 ">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={8}>
              <Card
                hoverable
                title="Laique Mirza"
                headStyle={{ border: 0 }}
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://www.laique007.com/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={
                  <Image
                    src={laiqueImage}
                    width={150}
                    height={150}
                    className="!rounded-full"
                  />
                }
                className="mt-4"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                hoverable
                title="Saad Shaikh"
                headStyle={{ border: 0 }}
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://saadshaikh.netlify.app/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={
                  <Image
                    src={laiqueImage}
                    width={150}
                    height={150}
                    className="!rounded-full"
                  />
                }
                className="mt-4"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                hoverable
                title="Ubed Shaikh"
                headStyle={{ border: 0 }}
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://ubedshaikh.netlify.app/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={
                  <Image
                    src={laiqueImage}
                    width={150}
                    height={150}
                    className="!rounded-full"
                  />
                }
                className="mt-4"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <HowWeWork />
      {/*      <Row className="mt-12" justify="center" align="middle" gutter={[32, 32]}>
        <Col md={24} lg={10}>
          <Image
            loader={() =>
              'https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg'
            }
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg"
            alt="work"
            width={350}
            height={250}
            className="rounded-2xl"
          />
        </Col>
  <Col md={24} lg={10}>
          <div className="text-center">
            <h2 className="inline-block text-xl relative title-effect">
              TECHNOLOGIES WE USE
            </h2>
          </div>
          <p className="mt-2 mx-auto max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
            repudiandae, officiis, totam exercitationem beatae tenetur omnis
            quas adipisci recusandae sunt asperiores blanditiis maxime.
          </p>
        </Col>
      </Row> */}
    </div>
  )
}

export default About
