import {
  CaretRightOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import Link from 'next/link'
import useWindowSize from '../hooks/use-window-dimensions'
import NavigationBtn from './button/NavigationBtn'

const Footer = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <div className="px-14 bg-black text-white py-20">
        <Row className={width > 1200 ? 'space-x-20' : 'space-x-0 space-y-14'}>
          <Col xs={24} lg={7}>
            <div>
              <h1 className="text-3xl graphyl-text text-white">Graphyl</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                deleniti quasi, vero libero harum animi quibusdam enim fuga,
                itaque architecto officia ratione. Exercitationem quaerat
                mollitia ad provident distinctio, voluptate doloremque.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} lg={7}>
            <div>
              <h1 className="text-white text-xl">Contact</h1>
              <p className="mb-0">Mumbai, India</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                expedita!
              </small>
              <div className="pt-3">
                <p className="!text-white">
                  <a href="mailto: graphylsolutions@gmail.com">
                    graphylsolutions@gmail.com
                  </a>{' '}
                  | <a href="tel:9876543211">+91 9876543211</a>
                </p>
              </div>
              <div className="space-x-4 mt-4">
                <NavigationBtn
                  tootlip="LinkedIn"
                  link="https://stackoverflow.com/"
                  icon={<LinkedinOutlined className="!text-2xl !text-white" />}
                />
                <NavigationBtn
                  tootlip="Email"
                  link="mailto:graphylsolutions@gmail.com"
                  icon={<MailOutlined className="!text-2xl !text-white" />}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={7}>
            <div>
              <h1 className="text-white text-xl">Links</h1>
              <ul className="list-none space-y-1">
                <li className="flex items-center text-white hover:text-accent">
                  <CaretRightOutlined />
                  <Link href="/">Home</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent">
                  <CaretRightOutlined />
                  <Link href="/about">About</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent">
                  <CaretRightOutlined />
                  <Link href="/services">Services</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent">
                  <CaretRightOutlined />
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="flex items-center text-white hover:text-accent">
                  <CaretRightOutlined />
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-[#000] py-4">
        <p className="text-white text-center mb-0">
          ©️ {new Date().getFullYear()} - All Rights Reserved.
          <span className="graphyl-text"> Graphyl</span>
        </p>
      </div>
    </>
  )
}
export default Footer
