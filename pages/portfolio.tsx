import { NextPage } from 'next'
import React from 'react'
import { Row, Col } from 'antd'
import { ProjectCard } from '../components'

export interface Project {
  name: string
  imgUrl: string
  liveUrl?: string
}

const Portfolio: NextPage = () => {
  const Projects: Project[] = [
    {
      name: 'Bookmark Landing Page',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/BookMark_Landing_Page_fosubr.png',
      liveUrl: 'https://ubed90.github.io/bookmark-landing-page',
    },
    {
      name: 'Natours',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685261/graphyl-website-assets/projects/Natours_h8qzyh.png',
      liveUrl: 'https://ubed90.github.io/Natours',
    },

    {
      name: 'SunnySide Landing Page',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/SunnySide_whgd85.png',
      liveUrl: 'https://ubed90.github.io/sunnyside-landing-page-FE-mentor',
    },

    {
      name: 'KhoobSurat',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685960/graphyl-website-assets/projects/Khoobsurat_nath0t.png',
      liveUrl: 'https://www.khooobsooorat.com/',
    },

    {
      name: 'Nizami Darbar',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654686379/graphyl-website-assets/projects/Nizami_Darbar_e4c0mv.png',
      liveUrl: 'https://alnizamidarbar.com/',
    },

    {
      name: 'Static Landing Page',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/Tracking_u3jczj.png',
      liveUrl: 'https://ubed90.github.io/Project-tracking-intro-component/',
    },
  ]

  return (
    <>
      <Row>
        <Col xs={24} className="text-center">
          <h1 className="text-biscuit text-5xl text-stroke-primary mb-4">
            Portfolio
          </h1>
          <p className="text-center">
            These are the Projects Completed and Deleivered by Graphyl.
          </p>
        </Col>
      </Row>

      <Row
        className="px-8 lg:px-16"
        gutter={[32, 32]}
        align="middle"
        justify="center"
      >
        {Projects.map((project) => (
          <Col xs={24} sm={12} md={8} xxl={6} className="flex justify-center">
            <div>
              <ProjectCard {...project} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Portfolio
