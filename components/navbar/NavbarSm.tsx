import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Divider, Drawer, Menu } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { checkMenuClicked } from '../../utils/helpers'
import Socials from '../socials/Socials'
import { NavbarProps } from './interface'

const NavbarSm: React.FC<NavbarProps> = ({ menuLink, setMenuLink }) => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-3">
        <div className="logo">
          <Link href="/">
            <h1
              className={`text-2xl graphyl-text cursor-pointer mb-0 text-white`}
            >
              Graphyl
            </h1>
          </Link>
        </div>
        <div>
          <Button
            icon={<MenuOutlined className="text-center text-white text-xl" />}
            type="text"
            onClick={showDrawer}
          >
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            placement="right"
            width="60%"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <div className="flex justify-between items-center">
              <h1
                className={`text-2xl graphyl-text cursor-pointer mb-0 text-white`}
              >
                Graphyl
              </h1>

              <Button
                icon={<CloseCircleOutlined className="text-white" />}
                type="text"
                onClick={onClose}
              />
            </div>
            <Divider />
            <Menu mode="vertical">
              <ul>
                <li>
                  <Menu.Item key="home">
                    <Button
                      type="link"
                      className={`!text-white ${
                        menuLink.menu === 'home' && menuLink.active
                          ? 'active'
                          : 'in-active'
                      }`}
                      onClick={() => {
                        checkMenuClicked('sm', 'home', setMenuLink, onClose)
                      }}
                    >
                      <Link href="/">Home</Link>
                    </Button>
                  </Menu.Item>
                </li>

                <li>
                  <Menu.Item key="about">
                    <Button
                      type="link"
                      className={`!text-white ${
                        menuLink.menu === 'about' && menuLink.active
                          ? 'active'
                          : 'in-active'
                      }`}
                      onClick={() => {
                        checkMenuClicked('sm', 'about', setMenuLink, onClose)
                      }}
                    >
                      <Link href="/about">About</Link>
                    </Button>
                  </Menu.Item>
                </li>

                <li>
                  <Menu.Item key="services">
                    <Button
                      type="link"
                      className={`!text-white ${
                        menuLink.menu === 'services' && menuLink.active
                          ? 'active'
                          : 'in-active'
                      }`}
                      onClick={() => {
                        checkMenuClicked('sm', 'services', setMenuLink, onClose)
                      }}
                    >
                      <Link href="/services">Services</Link>
                    </Button>
                  </Menu.Item>
                </li>

                <li>
                  <Menu.Item key="portfolio">
                    <Button
                      type="link"
                      className={`!text-white ${
                        menuLink.menu === 'portfolio' && menuLink.active
                          ? 'active'
                          : 'in-active'
                      }`}
                      onClick={() => {
                        checkMenuClicked(
                          'sm',
                          'portfolio',
                          setMenuLink,
                          onClose
                        )
                      }}
                    >
                      <Link href="/portfolio">Portfolio</Link>
                    </Button>
                  </Menu.Item>
                </li>

                <li>
                  <Menu.Item key="contact">
                    <Button
                      type="link"
                      className={`!text-white ${
                        menuLink.menu === 'contact' && menuLink.active
                          ? 'active'
                          : 'in-active'
                      }`}
                      onClick={() => {
                        checkMenuClicked('sm', 'contact', setMenuLink, onClose)
                      }}
                    >
                      <Link href="/contact">Contact</Link>
                    </Button>
                  </Menu.Item>
                </li>
              </ul>
            </Menu>
            <Divider />
            <Socials color="white" />
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default NavbarSm
