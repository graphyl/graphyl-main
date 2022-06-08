import React from 'react'
import { Carousel, Image } from 'antd'
import styles from '../styles/CarouselComp.module.css'
const CarouselComp: React.FC = () => {
  return (
    <Carousel dots={false} className="!-mt-8" autoplay>
      <div className={styles.divStyle1}>
        <h3 className={styles.h3Style1}>WELCOME TO GRAPHYL</h3>
      </div>
      <div className={styles.divStyle2}>
        <h3 className={styles.h3Style1}>IT'S TIME TO GO DIGITAL</h3>
      </div>
    </Carousel>
  )
}

export default CarouselComp
