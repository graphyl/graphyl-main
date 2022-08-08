import { CaretRightOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Link from 'next/link'
import useWindowSize from '../hooks/use-window-dimensions'
import Socials from './socials/Socials'

const Footer = () => {
  const { width } = useWindowSize()

  return (
    <>
      <div className="bg-black text-white py-20 px-10 xl:px-0">
        <Row
          justify="center"
          // gutter={[16,16]}
          className={`${
            width > 1200 ? 'space-x-20' : 'space-x-0 space-y-14'
          } mw-container`}
        >
          <Col xs={24} xl={6}>
            <div className="space-y-6">
              <h1 className="text-3xl graphyl-text text-white">Graphyl</h1>
              <p className="text-base">
                Graphyl strives to create a culture that empowers a humble,
                creative, and independent workforce. We are passionate about our
                customers and believe that collaboration and creativity are
                powerful tools to help them make their dreams a reality.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <div className="space-y-4">
              <h1 className="text-white text-xl">Contact</h1>
              <p className="mb-0 text-base">Mumbai, India</p>
              <div>
                <p className="!text-white text-base">
                  <a href="mailto:info@graphyl.com">info@graphyl.com</a> |{' '}
                  <a href="tel:9967005204">+91 9967005204</a>
                </p>
              </div>

              <Socials color="white" />
            </div>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <div>
              <h1 className="text-white text-xl">Links</h1>
              <ul className="list-none space-y-1">
                <li className="flex items-center text-white hover:text-accent text-base">
                  <CaretRightOutlined />
                  <Link href="/">Home</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent text-base">
                  <CaretRightOutlined />
                  <Link href="/about">About</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent text-base">
                  <CaretRightOutlined />
                  <Link href="/services">Services</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent text-base">
                  <CaretRightOutlined />
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent text-base">
                  <CaretRightOutlined />
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-[#000] py-4">
        <p className="text-white text-center mb-0 text-base">
          ©️ {new Date().getFullYear()} - All Rights Reserved.
          <span className="graphyl-text"> Graphyl</span>
        </p>
      </div>
    </>
  )
}
export default Footer
