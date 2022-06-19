import { Col, Row } from 'antd'
import React from 'react'
import { ServicesDetails } from '../components'
import { servicesData } from '../utils/data'

import webDevImg from '../components/assets/images/web-dev.svg'
import appDevImg from '../components/assets/images/app-dev.svg'
import desktopDevImg from '../components/assets/images/desktop-dev.svg'
import designImg from '../components/assets/images/design.svg'
import maintenanceImg from '../components/assets/images/maintenance.svg'
import testingImg from '../components/assets/images/testing.svg'

const services = () => {
  const images = [
    webDevImg,
    appDevImg,
    desktopDevImg,
    designImg,
    maintenanceImg,
    testingImg,
  ]

  return (
    <div className="px-8 lg:px-32">
      <Row justify="center">
        <Col xs={24} md={12} className="text-center space-y-6">
          <h1 className="text-gray text-2xl lg:text-4xl">Our Services</h1>
          <p className="text-gray">
            Being a Tech Startup and having expertise and experience in almost
            all development and testing areas, We at Graphyl Provide Scalable
            and Robust solutions which can curb all your essential needs right
            from root to making it big.
          </p>
        </Col>
      </Row>

      <div className="space-y-40 mt-40">
        {servicesData.map((service) => (
          <ServicesDetails
            title={service.title}
            desc={service.desc}
            approaches={service.approaches}
            image={images[service.image - 1]}
          />
        ))}
      </div>

      
    </div>
  )
}

export default services
