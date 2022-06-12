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
    <div className="container mx-auto px-6 lg:px-0">
      <Row className="mb-10">
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
        className="px-8 lg:px-16 mb-10"
        gutter={[32, 32]}
        align="middle"
        justify="center"
      >
        {Projects.map((project) => (
          <Col xs={24} md={12} xl={8} className="flex justify-center">
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
