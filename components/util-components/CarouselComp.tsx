import React from 'react'
import { Carousel, Image } from 'antd'
import useWindowSize from '../../hooks/use-window-dimensions'
import styles from '../../styles/CarouselComp.module.css'
const CarouselComp: React.FC = () => {
  const { width, height } = useWindowSize()
  return (
    <Carousel dots={true} autoplay>
      <div
        className={`${styles.divStyle1} ${
          width > 1280 ? 'desktop-carousel' : 'py-60'
        } w-full h-full bg-no-repeat bg-cover !flex justify-center items-center`}
      >
        <h3
          className={` ${width > 800 ? 'text-3xl' : 'text-1xl'}  text-white `}
        >
          WELCOME TO GRAPHYL
        </h3>
      </div>
      <div
        className={`${styles.divStyle2} ${
          width > 1280 ? 'desktop-carousel' : 'py-60'
        } w-full h-full bg-no-repeat bg-cover !flex justify-center items-center`}
      >
        <h3
          className={` ${width > 800 ? 'text-3xl' : 'text-1xl'}  text-white `}
        >
          IT'S TIME TO GO DIGITAL
        </h3>
      </div>
    </Carousel>
  )
}

export default CarouselComp
