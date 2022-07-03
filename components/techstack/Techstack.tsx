import { Col, List, Row, Tooltip } from 'antd'
import React from 'react'
import { TechstackProps } from '../../interface/interface'
import { frontend, backend, tools, app } from '../../utils/data'

const Techstack: React.FC<TechstackProps> = ({ isHome = false }) => {
  console.log(isHome)

  return (
    <>
      <div className="!text-center mb-10">
        <h2 className="inline-block text-2xl relative title-effect">
          Technologies we use
        </h2>
      </div>
      <div className={`"stack space-y-20 mt-20"`}>
        <Row>
          <Col xs={24} md={12} className="flex flex-col items-center">
            <p className={`title ${isHome && 'title-home'}`} title="Frontend">
              Frontend
            </p>
            <List
              grid={{ gutter: 14, xs: 6, md: 11 }}
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
              grid={{ gutter: 12, xs: 6, md: 11 }}
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
              grid={{ gutter: 12, xs: 6, md: 11 }}
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
              grid={{ gutter: 12, xs: 6, md: 11 }}
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
    </>
  )
}

export default Techstack
