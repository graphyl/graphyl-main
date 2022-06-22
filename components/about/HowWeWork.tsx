// import Image from 'next/image'
import { Col, Layout, Row, Image } from 'antd'
import Link from 'next/link'
import { aboutInfo } from '../../utils/data'
import agile from '../assets/images/agile.png'
const { Content, Sider } = Layout
function HowWeWork() {
  return (
    <div className="container mx-auto my-12 px-6 lg:px-0 text-center">
      <h2 className="inline-block text-2xl relative title-effect">
        HOW WE WORK
      </h2>
      <p className="mt-2 mx-auto w-[80%] text-center">{aboutInfo[0].desc}</p>
      <Image
        src={agile.src}
        preview={false}
        alt="work"
        className="w-[70%] mx-auto"
      />
      <p className="mt-2 mx-auto w-[80%] text-center">
        <span className='font-bold'>Work flow </span>: {aboutInfo[1].desc}
      </p>
    </div>
  )
}

export default HowWeWork
