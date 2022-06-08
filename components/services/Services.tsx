import { Card, Col, Row } from 'antd'
import React from 'react'
import { serviceCardData } from '../../utils/data'

const Services = () => {
  const { Meta } = Card

  return (
    <>
      <Row gutter={[32, 32]} justify="center">
        {serviceCardData.map((data) => (
          <Col xs={24} md={8} lg={6}>
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
    </>
  )
}

export default Services
