import React from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import Image from 'next/image'
import { GlobalOutlined } from '@ant-design/icons'
import LaiqueImage from '../assets/images/laique-img.jpg'
import useWindowSize from '../../hooks/use-window-dimensions'

const { Meta } = Card

const About: React.FC = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="mt-16">
      <h2 className="text-3xl">About</h2>
      <p className="mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        dolore perspiciatis reiciendis, dignissimos maxime tenetur quo ut a modi
        eum nisi necessitatibus neque?
      </p>

      <div className="site-card-wrapper mt-4 w-11/12 mx-auto">
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
              className="mt-4"
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
              className="mt-4"
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
      <Row className="mt-12">
        <Col md={24} lg={12} className="">
          <h2 className="text-xl">HOW WE WORK</h2>
          <p className="mt-2 mx-16">
            Culture Graphyl strives to create a culture that empowers a humble,
            creative, and independent workforce. We are passionate about our
            customers and believe that collaboration and creativity are powerful
            tools to help them make their dreams a reality. We believe that what
            makes us different makes us stronger. Building a more diverse,
            inclusive, and equitable organization is good for our teams, our
            customers, and our community. We empower each other to bring unique
            perspectives and experiences to work, and we continually seek new
            ways to do so. WorkFlow We combine sharp design with rich technology
            to craft exciting brands. Strong Follower of Agile Methodology to
            Ship Software Apps. ./Agile.png.
          </p>
        </Col>

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
      </Row>
      <Row className="mt-12">
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
      </Row>
    </div>
  )
}

export default About
