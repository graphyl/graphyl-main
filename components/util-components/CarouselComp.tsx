import React from 'react'
import { Carousel, Image } from 'antd'
import carousel1 from '../assets/images/saly-10.png'
import { ArrowRightOutlined } from '@ant-design/icons'
const CarouselComp: React.FC = () => {
  return (
    <div className="flex justify-around bg-black items-center flex-column w-full lg:h-screen pb-20 lg:pb-0">
      <div className="mw-container px-4 xl:px-0 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <Carousel
            dotPosition="top"
            dots={true}
            //  autoplay
          >
            <div className="py-8 px-4 md:px-0">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                WELCOME TO GRAPHYL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
            <div className="py-8 px-4 md:px-0">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                GO DIGITAL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
            <div className="py-8 px-4 md:px-0">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                EXPAND YOUR BUSINESS
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
          </Carousel>
        </div>
        <div className="lg:w-1/2 lg:py-20">
          <Image
            preview={false}
            src={carousel1.src}
            className="lg:-mt-60 md:w-[50%] lg:w-[75%] mx-auto"
            alt="carousel-img"
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselComp
