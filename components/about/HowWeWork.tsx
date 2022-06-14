import Image from 'next/image'
import { Col, Layout, Row } from 'antd'
import Link from 'next/link'
const { Content, Sider } = Layout
function HowWeWork() {
  return (
    <div className="container mx-auto px-6 lg:px-0 text-center">

    <Row className="mt-12 text-center">
      <Col md={24} lg={12} className="">
        <h2 className="text-xl">HOW WE WORK</h2>
        <p className="mt-2 mx-16">
          Culture Graphyl strives to create a culture that empowers a humble,
          creative, and independent workforce. We are passionate about our
          customers and believe that collaboration and creativity are powerful
          tools to help them make their dreams a reality. We believe that what
          makes us different makes us stronger.{' '}
          <Link style={{'color':'blue'}} href="/about">Know more.</Link>
        </p>
      </Col>

      <Col md={24} lg={12}>
        <Image
          loader={() =>
            'https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg'
          }
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg"
          alt="work"
          width={450}
          height={280}
        />
      </Col>
    </Row>
</div>
  )
}

export default HowWeWork
