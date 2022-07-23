import React from 'react'
import { Carousel, Image } from 'antd'
import carousel1 from '../assets/images/saly-10.png'
import { ArrowRightOutlined } from '@ant-design/icons'
const CarouselComp: React.FC = () => {
  return (
    <div className="flex justify-around bg-black items-center flex-column w-full h-screen">
      <div className="w-1/2">
        <Carousel dotPosition="top" dots={true} autoplay>
          <div className="py-8">
            <h3 className="xs:text-xl md:text-3xl lg:text-5xl text-custom-color-h font-bold">
              WELCOME TO GRAPHYL
            </h3>
            <p className="lg:text-sm text-custom-color-p py-4 w-3/4">
              For dreamers by creators For dreamers by creators For dreamers by
              For dreamers by creators For dreamers by creators creators
            </p>
            <button className="carousel-button-animation flex items-center gap-x-3">
              BOOK YOUR SLOT <ArrowRightOutlined />
            </button>
          </div>
          <div className="py-8">
            <h3 className="xs:text-xl md:text-3xl lg:text-5xl text-custom-color-h font-bold">
              GO DIGITAL
            </h3>
            <p className="lg:text-sm text-custom-color-p py-4 w-3/4">
              For dreamers by creators For dreamers by creators For dreamers by
              For dreamers by creators For dreamers by creators creators
            </p>
            <button className="carousel-button-animation flex items-center gap-x-3">
              BOOK YOUR SLOT <ArrowRightOutlined />
            </button>
          </div>
          <div className="py-8">
            <h3 className="xs:text-xl md:text-3xl lg:text-5xl text-custom-color-h font-bold">
              EXPAND YOUR BUSINESSS
            </h3>
            <p className="lg:text-sm text-custom-color-p py-4 w-3/4">
              For dreamers by creators For dreamers by creators For dreamers by
              For dreamers by creators For dreamers by creators creators
            </p>
            <button className="carousel-button-animation flex items-center gap-x-3">
              BOOK YOUR SLOT <ArrowRightOutlined />
            </button>
          </div>
        </Carousel>
      </div>
      <div className="w-1/2 text-center md:py-20">
        <Image
          preview={false}
          src={carousel1.src}
          width={'75%'}
          className="-mt-60"
          alt="carousel-img"
        />
      </div>
    </div>
  )
}

export default CarouselComp
