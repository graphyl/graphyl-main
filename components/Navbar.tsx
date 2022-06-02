import { Button, PageHeader } from 'antd'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <PageHeader
        backIcon={false}
        title={<h1 className="text-red-500">Graphyl</h1>}
        extra={[
          <Button key={1} type="link">
            <Link href="/">Home</Link>
          </Button>,
          <Button key={2} type="link">
            <Link href="/aboout">About</Link>
          </Button>,
          <Button key={3} type="link">
            <Link href="/contact">Contact</Link>
          </Button>,
        ]}
      />
    </>
  )
}

export default Navbar
