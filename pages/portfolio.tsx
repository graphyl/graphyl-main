import { NextPage } from 'next'
import React from 'react'
import { Row, Col } from 'antd'
import { ProjectCard } from '../components'
import { Project } from '../interface/interface'
import Head from 'next/head'

const Portfolio: NextPage = () => {
  const Projects: Project[] = [
    {
      name: 'Bookmark Landing Page',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1654685259/graphyl-website-assets/projects/BookMark_Landing_Page_fosubr.png',
      liveUrl: 'https://ubed90.github.io/bookmark-landing-page',
      techStack: ['Angular', 'SCSS'],
    },
    {
      name: 'Natours',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1663138289/graphyl-website-assets/projects/amruttam-store_g4mruy.png',
      liveUrl: 'https://ubed90.github.io/Natours',
      techStack: ['Angular', 'Scss'],
    },

    {
      name: 'Herbal Medicine Shop',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1655644276/graphyl-website-assets/projects/Herbal_Medicine_fn0ref.png',
      liveUrl: 'https://amruttam.store/#/',
      techStack: ['React', 'NodeJS', 'Express', 'MongoDB', 'RazorPay'],
    },

    // {
    //   name: 'KhoobSurat',
    //   imgUrl:
    //     'https://res.cloudinary.com/graphyl/image/upload/v1654685960/graphyl-website-assets/projects/Khoobsurat_nath0t.png',
    //   liveUrl: 'https://www.khooobsooorat.com/',
    //   techStack: ['React', 'PHP'],
    // },

    // {
    //   name: 'Nizami Darbar',
    //   imgUrl:
    //     'https://res.cloudinary.com/graphyl/image/upload/v1654686379/graphyl-website-assets/projects/Nizami_Darbar_e4c0mv.png',
    //   liveUrl: 'https://alnizamidarbar.com/',
    //   techStack: ['HTML', 'CSS', 'JavaScript'],
    // },

    {
      name: 'clipz',
      imgUrl:
        'https://res.cloudinary.com/graphyl/image/upload/v1655643800/graphyl-website-assets/projects/clips_laniuk.png',
      liveUrl: 'https://clipz-five.vercel.app/',
      techStack: ['Angular', 'SCSS', 'FireBase'],
    },
  ]
  return (
    <>
      <Head>
        <title>Graphyl | Portfolio</title>
        <meta
          name="description"
          content="We are a software development and consultancy service. We help small to medium scale businesses to build their online presence. Come work with us | For dreamers by creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mw-container px-4 xl:px-0 py-10 xl:py-20">
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

        <Row
          className="mb-10"
          gutter={[{ xs: 8, sm: 8, md: 24, lg: 24 }, 24]}
          align="middle"
          justify="center"
        >
          {Projects.map((project, idx) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              className="flex justify-center"
              key={idx}
            >
              <div className="h-80 xl:h-72 w-full rounded-xl overflow-hidden cursor-pointer relative main-card">
                <ProjectCard {...project} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Portfolio
