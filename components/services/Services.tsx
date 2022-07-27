import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  const serviceCardData = [
    {
      icon: 'https://res.cloudinary.com/graphyl/image/upload/v1654417835/graphyl-website-assets/services/web-dev_gnmcyu.png',
      title: 'Website Development',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417820/graphyl-website-assets/services/mobile-app_n73jqp.png`,
      title: 'Mobile Application Development',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417821/graphyl-website-assets/services/desktop_bw2mso.png`,
      title: 'Desktop Application Development',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417838/graphyl-website-assets/services/ui-ux_blgvti.png`,
      title: 'UI/UX Development',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417839/graphyl-website-assets/services/maintenance_retimg.png`,
      title: 'Maintenance',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
    {
      icon: `https://res.cloudinary.com/graphyl/image/upload/v1654417837/graphyl-website-assets/services/testing_atvjb3.png`,
      title: 'Testing',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vita exercitationem illo suscipit. Dignissimos minima, maiores harum asperiore animi sunt. Provident ab perferendis velit unde harum.',
    },
  ]
  const { Meta } = Card

  return (
    <div className="text-center mt-16 px-0 lg:px-16 space-y-10">
      <h2 className="inline-block text-2xl relative title-effect">Services</h2>
      <Row gutter={[32, 32]} justify="center">
        {serviceCardData.map((data, idx) => (
          <Col xs={24} md={12} lg={8} key={idx}>
            <Card
              hoverable
              cover={
                <div className="p-8 flex justify-center">
                  <Image alt={data.title} src={data.icon} width="100%" height="100%" />
                </div>
              }
            >
              <Meta
                title={<h1>{data.title}</h1>}
                description={<p>{data.desc}</p>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Services
