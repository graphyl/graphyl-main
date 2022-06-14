import Image from 'next/image'
import { Col, Layout, Row } from 'antd'
import Link from 'next/link'
const { Content, Sider } = Layout
function HowWeWork() {
  return (
    <div className="container mx-auto my-4 px-6 lg:px-0 text-center">
     
      <Row
        className="mt-12 lg:flex-row-reverse"
        justify="center"
        align="middle"
        gutter={[32, 32]}
      >
        <Col md={24} lg={10}>
          <Image
            loader={() =>
              'https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg'
            }
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg"
            alt="work"
            width={450}
            height={280}
            className="rounded-2xl"
          />
        </Col>
        <Col md={24} lg={10}>
          <div className="text-center">
            <h2 className="inline-block text-xl relative title-effect">
              HOW WE WORK
            </h2>
          </div>
          <p className="mt-2 mx-auto max-w-md">
            Culture Graphyl strives to create a culture that empowers a humble,
            creative, and independent workforce. We are passionate about our
            customers and believe that collaboration and creativity are powerful
            ...
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default HowWeWork
