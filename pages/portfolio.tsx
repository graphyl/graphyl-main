import { NextPage } from 'next'
import React from 'react'
import { Row, Col } from 'antd'
import { ProjectCard } from '../components'
import { Projects } from '../utils/data'

const Portfolio: NextPage = () => {
  return (
    <div className="container mx-auto px-4 xl:px-30 2xl:px-40">
      <Row className="mb-10">
        <Col xs={24} className="text-center">
          <h1 className="inline-block text-biscuit text-5xl text-stroke-primary mb-4 relative title-effect">
            Portfolio
          </h1>
          <p className="text-center">
            These are the Projects Completed and Deleivered by Graphyl.
          </p>
        </Col>
      </Row>

      <Row className="mb-10" gutter={[32, 32]} align="middle" justify="center">
        {Projects.map((project) => (
          <Col xs={24} sm={12} xl={8} className="flex justify-center">
            <div className="h-80 w-full rounded-xl overflow-hidden cursor-pointer relative main-card">
              <ProjectCard {...project} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Portfolio
