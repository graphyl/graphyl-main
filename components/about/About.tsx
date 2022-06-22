import React from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import Image from 'next/image'
import { GlobalOutlined } from '@ant-design/icons'
import useWindowSize from '../../hooks/use-window-dimensions'

import laiqueImage from '../assets/images/laique-img.jpg'
import UbedImage from '../assets/images/Ubed-img.png'

const { Meta } = Card

const About: React.FC = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="mt-16 w-full">
      <div className="text-center">
        <h2
          className={`${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } inline-block text-3xl relative title-effect text-gray`}
        >
          About
        </h2>
      </div>
      <p className="mx-auto max-w-2xl my-5 text-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        dolore perspiciatis reiciendis, dignissimos maxime tenetur quo ut a modi
        eum nisi necessitatibus neque?
      </p>

      <div>
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
                className="mt-4 about-card"
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
                className="mt-4 about-card"
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
                    src={UbedImage}
                    width={150}
                    height={150}
                    className="!rounded-full gradient"
                  />
                }
                className="mt-4 about-card"
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
    </div>
  )
}

export default About
