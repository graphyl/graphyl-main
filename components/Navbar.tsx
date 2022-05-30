import { Button, PageHeader } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <PageHeader
        backIcon={false}
        title={<h1 className='text-red-500'>Graphyl</h1>}
        extra={[
          <Button key={1} type="link">
            Home
          </Button>,
          <Button key={2} type="link">
            About
          </Button>,
          <Button key={3} type="link">
            Contact
          </Button>,
        ]}
      />
    </>
  )
}

export default Navbar
