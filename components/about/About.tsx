import React from 'react'
import { Card, Col, Row, Tooltip, Image } from 'antd'
import { GlobalOutlined, LinkedinOutlined, LinkOutlined } from '@ant-design/icons'
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

      <div className='py-8 !w-[100%] bg-black'>
        <div
          className={`${
            width < 768 ? 'ml-[50%] -translate-x-[50%]' : ''
          } mt-4 site-card-wrapper flex justify-center items-center mx-auto  `}
        >
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src={laiqueImage.src}
                    width={250}
                    className="h-full !w-full"
                    preview={false}
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Laique Mirza</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src={laiqueImage.src}
                    width={250}
                    className="h-full !w-full"
                    preview={false}
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Laique Mirza</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src={laiqueImage.src}
                    width={250}
                    className="h-full !w-full"
                    preview={false}
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a target="_blank" href="https://www.laique007.com/">
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Laique Mirza</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
      <HowWeWork />
    </div>
  )
}

export default About
