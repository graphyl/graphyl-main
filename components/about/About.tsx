import React from 'react'
import { Card, Col, Row, Space, Tooltip } from 'antd'
import Image from 'next/image'
import { GlobalOutlined, LinkOutlined } from '@ant-design/icons'
import LaiqueImage from '../assets/laique-img.jpg'
import useWindowSize from '../../hooks/use-window-dimensions'
import Layout from 'antd/lib/layout/layout'
const { Meta } = Card
const About:React.FC = () => {
  const { width, height } = useWindowSize()
  return (
    <div className="container mt-12">
      <h2 className="text-3xl">About</h2>
      <p className='mx-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        dolore perspiciatis reiciendis, dignissimos maxime tenetur quo ut a modi
        eum nisi necessitatibus neque?
      </p>

      <div className="site-card-wrapper mt-4 w-11/12 mx-auto">
        <Row gutter={32} className="flex justify-around">
          <Card
            hoverable
            style={{ width: 300 }}
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
          <Card
            hoverable
            style={{ width: 300 }}
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
          <Card
            hoverable
            style={{ width: 300 }}
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
        </Row>
      </div>
      <Row className="mt-12">
        <Col md={24} lg={12} className="">
          <h2 className="text-xl">HOW WE WORK</h2>
          <p className="mt-2 mx-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
            repudiandae, officiis, totam exercitationem beatae tenetur omnis
            quas adipisci recusandae sunt asperiores blanditiis maxime.
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
