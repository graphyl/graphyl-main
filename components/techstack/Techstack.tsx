import { Col, List, Row, Tooltip } from 'antd'
import motion from 'antd/lib/_util/motion'
import React from 'react'
import useWindowSize from '../../hooks/use-window-dimensions'
import { frontend, backend, tools, app } from '../../utils/data'

const Techstack = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <div className="stack space-y-10">
        <div className="frontend space-y-6">
          <p className={`title`} title="Frontend">
            Frontend
          </p>
          <Row>
            <Col xs={24} md={12}>
              <p className="text-gray">
                The part of a website that the user interacts with directly is
                termed the front end. It is also referred to as the ‘client
                side’ of the application. It includes everything that users
                experience directly: text colors and styles, images, graphs and
                tables, buttons, colors, and navigation menu.
              </p>
            </Col>
            <Col xs={24} md={12}>
              <List
                grid={{ gutter: 14, xs: 6, md: 11 }}
                dataSource={frontend}
                renderItem={(item) => (
                  <List.Item>
                    <Tooltip title={item.title} placement="bottom">
                      <img src={item.url} alt={item.title} width="40" />
                    </Tooltip>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
        <div className="backend space-y-6">
          <p className={`title`} title="Backend">
            Backend
          </p>
          <List
            grid={{ gutter: 12, xs: 6, md: 11 }}
            dataSource={backend}
            renderItem={(item) => (
              <List.Item>
                <Tooltip title={item.title} placement="bottom">
                  <img src={item.url} alt={item.title} width="40" />
                </Tooltip>
              </List.Item>
            )}
          />
        </div>
        <div className="app space-y-6">
          <p className={`title`} title="App">
            App
          </p>
          <List
            grid={{ gutter: 12, xs: 6, md: 11 }}
            dataSource={app}
            renderItem={(item) => (
              <List.Item>
                <Tooltip title={item.title} placement="bottom">
                  <img src={item.url} alt={item.title} width="40" />
                </Tooltip>
              </List.Item>
            )}
          />
        </div>
        <div className="tools space-y-6">
          <p className={`title`} title="Tools">
            Tools
          </p>
          <List
            grid={{ gutter: 12, xs: 6, md: 11 }}
            dataSource={tools}
            renderItem={(item) => (
              <List.Item>
                <Tooltip title={item.title} placement="bottom">
                  <img src={item.url} alt={item.title} width="40" />
                </Tooltip>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  )
}

export default Techstack
