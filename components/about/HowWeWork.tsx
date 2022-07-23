// import Image from 'next/image'
import { Layout, Image } from 'antd'
import { aboutInfo } from '../../utils/data'
import agile from '../assets/images/agile.png'
const { Content, Sider } = Layout
function HowWeWork() {
  return (
    <div className="mw-container px-4 py-10 xl:px-0 xl:py-20 !text-center space-y-10">
      <h2 className="inline-block text-2xl relative title-effect">
        HOW WE WORK
      </h2>
      <p className="mt-2">{aboutInfo[0].desc}</p>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-xl title title-home" title="Work Flow">Work flow </h3>
        <p className="mt-2 mx-auto w-[80%] text-center">
         {aboutInfo[1].desc}
      </p>
      </div>
      <Image
        src={agile.src}
        preview={false}
        alt="work"
        className="w-[70%] mx-auto"
      />
    </div>
  )
}

export default HowWeWork
