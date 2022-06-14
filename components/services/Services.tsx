import { Card, Col, Row } from 'antd'
import React from 'react'
import { serviceCardData } from '../../utils/data'

const Services = () => {
  const { Meta } = Card

  return (
    <div className="text-center mt-16">
      <Row gutter={[32, 32]} justify="center">
        {serviceCardData.map((data) => (
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <div className="p-8 flex justify-center">
                  <img alt={data.title} src={data.icon} />
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
