import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  const serviceCardData = [
    {
      icon: 'https://res.cloudinary.com/graphyl/image/upload/v1654417835/graphyl-website-assets/services/web-dev_gnmcyu.png',
      title: 'Website Development',
      desc: "In today's day and age web development is increasingly being essential and globally brands are focusing on latest web development strategies. We at Graphyl use latest trends/tools in technologies to build a fast, elegant & most importantly we think and go with the mobile first approach.",
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417820/graphyl-website-assets/services/mobile-app_n73jqp.png`,
      title: 'Mobile Application Development',
      desc: 'Empower your business with Custom App Development. We help you engage, acquire and retain your users through intuitive interface and convenient functionalities. Through our organised system of managing projects and lean structure to maximise creativity, we ensure that your project is delivered always on time, budget and quality.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417821/graphyl-website-assets/services/desktop_bw2mso.png`,
      title: 'Desktop Application Development',
      desc: 'Desktop application development is aimed at building desktop software for Mac, Windows, and Linux or upgrading existing desktop apps with new functionality. A company with 33 years in IT, Graphyl offers professional desktop application development services using JavaScript, .NET, and Python.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417838/graphyl-website-assets/services/ui-ux_blgvti.png`,
      title: 'UI/UX Development',
      desc: 'Graphyl can help visualise even the craziest ideas converting them Into elegant design, awesome experiences and catchy brands. We exist to solve Business challenges with creative solution.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417839/graphyl-website-assets/services/maintenance_retimg.png`,
      title: 'Maintenance',
      desc: "From highly meticulous manual testing of your project's most intricate features to large-scale automated testing of complex software suites—our qualified QA engineers can do it all.",
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417837/graphyl-website-assets/services/testing_atvjb3.png`,
      title: 'Testing',
      desc: 'We at Graphyl work with a lot of enterprises and start-ups to guide them into the entire process from tech-hiring to building an architecture & deployment of the product on the cloud. We work with the internal teams of these companies and make sure that the right product is built & delivered as per the requirement.',
    },
  ]
  const { Meta } = Card

  return (
    <div className="text-center mt-16 px-0 lg:px-16 space-y-10">
      <h2 className="inline-block text-2xl relative title-effect">Services</h2>
      <Row gutter={[32, 32]} justify="center">
        {serviceCardData.map((data, idx) => (
          <Col xs={24} md={12} lg={8} key={idx}>
            <Link href="/services">
              <Card
                hoverable
                className='xl:h-96'
                cover={
                  <div className="p-8 flex justify-center">
                    <Image
                      alt={data.title}
                      src={data.icon}
                      width="100%"
                      height="100%"
                    />
                  </div>
                }
              >
                <Meta
                  title={<h1>{data.title}</h1>}
                  description={<p>{data.desc.substring(0 , 200) + ' ...'}</p>}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Services
