import React from 'react'
import { Carousel, Image } from 'antd'
import useWindowSize from '../hooks/use-window-dimensions'
import styles from '../styles/CarouselComp.module.css'
const CarouselComp: React.FC = () => {
  const { width, height } = useWindowSize()
  return (
    <Carousel dots={true} autoplay>
      <div
        className={`${styles.divStyle1} w-full h-full bg-no-repeat bg-cover `}
      >
        <h3
          className={` ${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } h-full flex justify-center items-center text-white `}
        >
          WELCOME TO GRAPHYL
        </h3>
      </div>
      <div
        className={`${styles.divStyle2} w-full h-full bg-no-repeat bg-cover`}
      >
        <h3
          className={` ${
            width > 800 ? 'text-3xl' : 'text-1xl'
          } h-full flex justify-center items-center text-white `}
        >
          IT'S TIME TO GO DIGITAL
        </h3>
      </div>
    </Carousel>
  )
}

export default CarouselComp
