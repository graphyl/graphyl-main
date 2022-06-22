import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { Col, Collapse, Row } from 'antd'
import React from 'react'
import { accordionData } from '../../utils/data'
import NavigationBtn from '../button/NavigationBtn'

const Faq: React.FC = () => {
  const { Panel } = Collapse
  return (
    <Row className="w-full" align="middle">
      <Col xs={24} md={12}>
        <div className="text-center mb-5 space-y-4">
          <h1 className="inline-block	text-4xl text-stroke-primary mb-4 relative title-effect text-gray">
            FAQ
          </h1>
          <p className="text-2xl text-gray">Frequently Asked Questions</p>
          <p className="text-gray">Wanna know more? come connect with us.</p>
          <div className="space-x-4 mt-4">
            <NavigationBtn
              tootlip="LinkedIn"
              link="https://stackoverflow.com/"
              icon={<LinkedinOutlined className="!text-2xl !text-gray" />}
            />
            <NavigationBtn
              tootlip="Email"
              link="mailto:graphylsolutions@gmail.com"
              icon={<MailOutlined className="!text-2xl !text-gray" />}
            />
            <NavigationBtn
              tootlip="Phone"
              link="tel:9876543211"
              icon={<PhoneOutlined className="!text-2xl !text-gray" />}
            />
          </div>
        </div>
      </Col>

      <Col xs={24} md={12} className='border-l-accent border-l-2'>
        <Collapse className="bg-white" bordered={false} accordion>
          {accordionData.map((data, index) => (
            <Panel
              header={data.question}
              key={index}
              style={{ paddingBlock: 5 }}
            >
              <div className="!px-10 text-white !text-justify">{data.answer}</div>
            </Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  )
}

export default Faq
