import React from 'react'
import { Card, Col, Row, Tooltip, Image } from 'antd'
import {
  GlobalOutlined,
  LinkedinOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import useWindowSize from '../../hooks/use-window-dimensions'

const { Meta } = Card

const About: React.FC = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="about-team">
      <div className="mw-container px-4 xl:px-0 text-center py-10">
        <h2
          className={`${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } inline-block text-3xl relative title-effect`}
        >
          About
        </h2>

        <p className="my-5 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
        dolore perspiciatis reiciendis, dignissimos maxime tenetur quo ut a modi
        eum nisi necessitatibus neque?
      </p>
      </div>

      <div className="py-8 xl:py-20 !w-[100%] bg-black">
      <h2
          className={`${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } inline-block text-3xl relative title-effect !text-white mb-4`}
        >
          Our Team
        </h2>
        <div className='mw-container px-4 xl:px-0'>
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src='https://res.cloudinary.com/graphyl/image/upload/v1655193649/graphyl-website-assets/Team/laique-img_sftutb.jpg'
                    // width={250}
                    className="h-80 object-cover md:h-full !w-full"
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
                // style={{ width: 250 }}
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
                    src='https://res.cloudinary.com/graphyl/image/upload/v1658556271/graphyl-website-assets/Team/ubed_aqjmdl.jpg'
                    // width={250}
                    className="h-80 object-cover md:h-full !w-full"
                    preview={false}
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a target="_blank" href="https://www.linkedin.com/in/ubed-shaikh-468a01131/">
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a target="_blank" href="https://ubedshaikh.netlify.app/home">
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                // style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Ubed Shaikh</h2>
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
                    src='https://res.cloudinary.com/graphyl/image/upload/v1658562373/graphyl-website-assets/Team/saad-img_g2qy6o.jpg'
                    // width={250}
                    className="h-80 object-cover md:h-full !w-full"
                    preview={false}
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/saad-shaikh-278452193/"
                    >
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a target="_blank" href="https://saadshaikh.netlify.app/">
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                // style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Saad Shaikh</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Hello there, Im saad shaikh. A Fullstack Developer with three
                  years of industrial experience. Wanna know more about me?
                  Visit either of those links below.
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
