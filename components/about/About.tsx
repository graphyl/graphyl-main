import React from 'react'
import { Card, Col, Row, Tooltip, Image } from 'antd'
import { LinkedinOutlined, LinkOutlined } from '@ant-design/icons'
import useWindowSize from '../../hooks/use-window-dimensions'

const About: React.FC = () => {
  const { width } = useWindowSize()

  return (
    <div className="about-team">
      <div className="mw-container px-4 xl:px-0 text-center py-10">
        <h2
          className={`inline-block relative !text-black title-effect ${
            width > 800 ? '!text-5xl' : '!text-1xl'
          }`}
        >
          About
        </h2>

        <p className="my-5 mx-auto">
          Graphyl is a Team of Under-rated but Enthusiastic developers aiming to
          provide optimal solutions to their clients. We work together to
          design, create and produce work that we are proud of for folks that we
          believe in. Graphylis an all-in-one IT Solutions Platform for small
          business. We empower small Scale Businesses and Startups around the
          world to start and grow their businesses with our smart development
          technologies, scalable Support, and inspiring content.
        </p>
      </div>

      <div className="py-8 xl:py-10 !w-[100%]">
        <h2
          className={`${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } inline-block text-3xl relative title-effect !text-black mb-4`}
        >
          Our Team
        </h2>

        <p className="my-5 mx-auto max-w-3xl">
          Graphyl is a Team of Enthusiastic developers aiming to
          provide optimal solutions to their clients. We work together to
          design, create and produce work that we are proud of for folks that we
          believe in. Graphylis an all-in-one IT Solutions Platform for small
          business. We empower small Scale Businesses and Startups around the
          world to start and grow their businesses with our smart development
          technologies, scalable Support, and inspiring content.
        </p>

        <div className="mw-container px-4 xl:px-0">
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src="https://res.cloudinary.com/graphyl/image/upload/v1655193649/graphyl-website-assets/Team/laique-img_sftutb.jpg"
                    className="h-80 object-cover md:h-full !w-full"
                    preview={false}
                    alt="laique"
                    width="100%"
                    height="100%"
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.laique007.com/"
                    >
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.laique007.com/"
                    >
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                // style={{ width: 250 }}
                className="mt-4"
              >
                <h2 className="text-xl">Laique Mirza</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Enthusiastic Software Developer eager to contribute to team
                  success through hard work, attention to detail and excellent
                  organizational skills. Clear understanding of software task
                  and responsibility.
                </p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src="https://res.cloudinary.com/graphyl/image/upload/v1658556271/graphyl-website-assets/Team/ubed_aqjmdl.jpg"
                    className="h-80 object-cover md:h-full !w-full"
                    preview={false}
                    alt="ubed"
                    width="100%"
                    height="100%"
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/ubed-shaikh-468a01131/"
                    >
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://ubedshaikh.netlify.app/home"
                    >
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
                className="mt-4"
              >
                <h2 className="text-xl">Ubed Shaikh</h2>
                <p className="!text-sm !text-slate-500 !font-thin">
                  Hi 🤙. I am Ubed Shaikh. I am a Full Stack Developer and UI /
                  UX Designer having more than 2 years of Industry experience in
                  developing scalable and robust applications.
                </p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src="https://res.cloudinary.com/graphyl/image/upload/v1658562373/graphyl-website-assets/Team/saad-img_g2qy6o.jpg"
                    className="h-80 object-cover md:h-full !w-full"
                    preview={false}
                    alt="saad"
                    width="100%"
                    height="100%"
                  />
                }
                actions={[
                  <Tooltip key="view" title="Visit Linkedin" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/saad-shaikh-278452193/"
                    >
                      <LinkedinOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                  <Tooltip key="view" title="Visit Website" placement="bottom">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://saadshaikh.netlify.app/"
                    >
                      <LinkOutlined className="text-xl" />
                    </a>
                  </Tooltip>,
                ]}
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
