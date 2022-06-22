import { Row, Col, List, Image } from 'antd'
import React from 'react'
import { ServicesDetailsInterface } from '../../interface/interface'

const ServicesDetails: React.FC<ServicesDetailsInterface> = ({
  title,
  desc,
  approaches,
  image,
}) => {
  return (
    <>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <h1 className="title" title={title}>
            {title}
          </h1>
          <p>{desc}</p>
          <ul className="mt-6 space-y-2">
            {approaches.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex justify-end">
            {/* @ts-ignore */}
            <Image preview={false} src={image.src} width={400} className='sm:mt-10'/>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ServicesDetails
