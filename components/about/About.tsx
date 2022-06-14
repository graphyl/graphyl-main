import React from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import Image from 'next/image'
import { GlobalOutlined } from '@ant-design/icons'
import LaiqueImage from '../assets/images/laique-img.jpg'
import useWindowSize from '../../hooks/use-window-dimensions'
import Link from 'next/link'
import HowWeWork from './HowWeWork'

const { Meta } = Card

const About: React.FC = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="mt-8">
      <h2 className={`${width>800 ? 'text-3xl':'text-1xl'}`}>About</h2>
      <p className={`${width>800 ? 'mx-36' : 'mx-8'} mb-4`}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        magna aliqua.
      </p>
      <div className="bg-black py-8">
        <div className="site-card-wrapper w-11/12 mx-auto ">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={8} lg={6}>
              <Card
                hoverable
                title="Laique Mirza"
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://www.laique007.com/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={<Image src={LaiqueImage} width={200} height={200} />}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8} lg={6}>
              <Card
                hoverable
                title="Saad Shaikh"
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://saadshaikh.netlify.app/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={<Image src={LaiqueImage} width={200} height={200} />}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>

            <Col xs={24} md={8} lg={6}>
              <Card
                hoverable
                title="Ubed Shaikh"
                extra={
                  <Tooltip key="view" title="Visit Website" placement="top">
                    <a target="_blank" href="https://ubedshaikh.netlify.app/">
                      <GlobalOutlined className="text-2xl" />
                    </a>
                  </Tooltip>
                }
                cover={<Image src={LaiqueImage} width={200} height={200} />}
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

      {/* <Row className="mt-12">
        <Col md={24} lg={12}>
          <Image
            loader={() =>
              'https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg'
            }
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg"
            alt="work"
            width={350}
            height={250}
          />
        </Col>
        <Col md={24} lg={12} className="">
          <h2 className="text-xl">TECHNOLOGIES WE USE</h2>
          <p className="mt-2 mx-16">
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
