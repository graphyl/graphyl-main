import { Button, PageHeader } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { checkMenuClicked } from '../../utils/helpers'
import { NavbarProps } from './interface'

const Navbar: React.FC<NavbarProps> = ({ menuLink, setMenuLink }) => {
  return (
    <>
      <PageHeader
        className="site-page-header mw-container !px-4 xl:!px-0"
        title={
          <div className="cursor-pointer">
            <Link href="/">
              <h1
                className={`text-white text-2xl graphyl-text cursor-pointer mb-0`}
              >
                Graphyl
              </h1>
            </Link>
          </div>
        }
        backIcon={false}
        extra={[
          <Button
            key="1"
            type="link"
            className={`!text-white ${
              menuLink.menu === 'home' && menuLink.active
                ? 'active'
                : 'in-active'
            }`}
            onClick={() => {
              checkMenuClicked('home', setMenuLink)
            }}
          >
            <Link href="/">Home</Link>
          </Button>,
          <Button
            key="2"
            type="link"
            className={`!text-white ${
              menuLink.menu === 'about' && menuLink.active
                ? 'active'
                : 'in-active'
            }`}
            onClick={() => {
              checkMenuClicked('about', setMenuLink)
            }}
          >
            <Link href="/about">About</Link>
          </Button>,
          <Button
            key="3"
            type="link"
            className={`!text-white ${
              menuLink.menu === 'services' && menuLink.active
                ? 'active'
                : 'in-active'
            }`}
            onClick={() => {
              checkMenuClicked('services', setMenuLink)
            }}
          >
            <Link href="/services">Services</Link>
          </Button>,
          <Button
            key="4"
            type="link"
            className={`!text-white ${
              menuLink.menu === 'portfolio' && menuLink.active
                ? 'active'
                : 'in-active'
            }`}
            onClick={() => {
              checkMenuClicked('portfolio', setMenuLink)
            }}
          >
            <Link href="/portfolio">Portfolio</Link>
          </Button>,
          <Button
            key="5"
            type="link"
            className={`!text-white ${
              menuLink.menu === 'contact' && menuLink.active
                ? 'active'
                : 'in-active'
            }`}
            onClick={() => {
              checkMenuClicked('contact', setMenuLink)
            }}
          >
            <Link href="/contact">Contact</Link>
          </Button>,
        ]}
      />
    </>
  )
}

export default Navbar
