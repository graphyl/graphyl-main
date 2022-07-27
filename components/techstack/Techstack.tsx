import { Col, List, Row, Tooltip } from 'antd'
import React from 'react'
import { TechstackProps } from '../../interface/interface'

const Techstack: React.FC<TechstackProps> = ({ isHome = false }) => {
  const frontend = [
    {
      title: 'HTML5',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS3',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      title: 'Scss',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      title: 'Bootstrap',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      title: 'Tailwind',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    },
    {
      title: 'Javascript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      title: 'Typescript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      title: 'React',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Next Js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    },
    {
      title: 'Angular',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      title: 'Vue',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
      title: 'Redux',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      title: 'Material UI',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    },
  ]

  const backend = [
    {
      title: 'Node Js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      title: 'Express Js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      title: 'Python',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      title: 'Django',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    },
    {
      title: 'Mongo DB',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      title: 'My SQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    },
    {
      title: 'Postgres SQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      title: 'Redis',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      title: 'Firebase',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    },
  ]

  const app = [
    {
      title: 'Kotlin',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    },
    {
      title: 'Swift',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    },
    {
      title: 'React Native',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      title: 'Flutter',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      title: 'Ionic',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
    },
  ]

  const tools = [
    {
      title: 'GIT',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'Github',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      title: 'Figma',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      title: 'Docker',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      title: 'Digital Ocean',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
    },
    {
      title: 'Amazon Web Services',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
  ]
  return (
    <div className="mw-container px-4 xl:px-0">
      <div className="!text-center mb-10">
        <h2 className="inline-block text-2xl relative title-effect">
          Technologies we use
        </h2>
      </div>
      <div className={`"stack space-y-20 mt-20"`}>
        <Row gutter={[24, 0]}>
          <Col xs={24} md={12} className="flex flex-col items-center">
            <p className={`title ${isHome && 'title-home'}`} title="Frontend">
              Frontend
            </p>
            <List
              grid={{ gutter: 14, xs: 9, md: 6 }}
              dataSource={frontend}
              renderItem={(item) => (
                <List.Item className="transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <Tooltip title={item.title} placement="bottom">
                    <img src={item.url} alt={item.title} width="40" />
                  </Tooltip>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12} className="flex flex-col items-center">
            <p className={`title ${isHome && 'title-home'}`} title="Backend">
              Backend
            </p>
            <List
              grid={{ gutter: 12, xs: 9, md: 6 }}
              dataSource={backend}
              renderItem={(item) => (
                <List.Item className="transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <Tooltip title={item.title} placement="bottom">
                    <img src={item.url} alt={item.title} width="40" />
                  </Tooltip>
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={24} md={12} className="flex flex-col items-center">
            <p className={`title ${isHome && 'title-home'}`} title="App">
              App
            </p>
            <List
              grid={{ gutter: 12, xs: 6, md: 6 }}
              dataSource={app}
              renderItem={(item) => (
                <List.Item className="transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <Tooltip title={item.title} placement="bottom">
                    <img src={item.url} alt={item.title} width="40" />
                  </Tooltip>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12} className="flex flex-col items-center">
            <p className={`title ${isHome && 'title-home'}`} title="Tools">
              Tools
            </p>
            <List
              grid={{ gutter: 12, xs: 6, md: 6 }}
              dataSource={tools}
              renderItem={(item) => (
                <List.Item className="transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <Tooltip title={item.title} placement="bottom">
                    <img src={item.url} alt={item.title} width="40" />
                  </Tooltip>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Techstack
