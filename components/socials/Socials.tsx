import {
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import React from 'react'
import { SocialsProps } from '../../interface/interface'
import NavigationBtn from '../button/NavigationBtn'

const Socials: React.FC<SocialsProps> = ({ color }) => {
  return (
    <>
      <h1 className={`text-${color} text-lg font-bold`}>Connect with us</h1>
      <div className="space-x-4 mt-4">
        <NavigationBtn
          tootlip="LinkedIn"
          link="https://www.linkedin.com/company/86632763"
          icon={<LinkedinOutlined className={`!text-2xl !text-${color}`} />}
        />
        <NavigationBtn
          tootlip="Instagram"
          link="https://www.instagram.com/_graphyl_/"
          icon={<InstagramOutlined className={`!text-2xl !text-${color}`} />}
        />
        <NavigationBtn
          tootlip="Email"
          link="mailto:info@graphyl.com"
          icon={<MailOutlined className={`!text-2xl !text-${color}`} />}
        />
        <NavigationBtn
          tootlip="Phone"
          link="tel:9967005205"
          icon={<PhoneOutlined className={`!text-2xl !text-${color}`} />}
        />
      </div>
    </>
  )
}

export default Socials
