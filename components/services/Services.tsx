import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import { serviceCardData } from '../../utils/data'

const Services = () => {
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
                  <Image alt={data.title} src={data.icon} />
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
