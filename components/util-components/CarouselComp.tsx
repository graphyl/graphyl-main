import React from 'react'
import { Carousel, Image } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

// const contentStyle: React.CSSProperties = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// }

const CarouselComp: React.FC = () => {
  return (
    <div className="bg-black desktop-carousel lg:flex lg:items-center">
      <div className="mw-container px-4 pb-16 xl:px-0 md:py-20 lg:py-32 xl:py-0 md:grid md:grid-cols-2 xl:gap-x-10 items-center">
        <div className="left pt-4 pb-8">
          <Carousel dots={true} dotPosition="top" >
            <div className="pt-8 !flex flex-col gap-y-4 overflow-hidden">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                WELCOME TO GRAPHYL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p md:w-3/4 leading-4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
            <div className="pt-8 !flex flex-col gap-y-4 overflow-hidden">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                WELCOME TO GRAPHYL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p md:w-3/4 leading-4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
            <div className="pt-8 !flex flex-col gap-y-4 overflow-hidden">
              <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                WELCOME TO GRAPHYL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p md:w-3/4 leading-4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button>
            </div>
          </Carousel>
        </div>
        <div className="right">
          <Image
            preview={false}
            src="https://res.cloudinary.com/graphyl/image/upload/v1658918094/graphyl-website-assets/services/Graphyl-Carousel_pkpraa.png"
            className="w-4/5 lg:w-full mx-auto"
            alt="carousel-img"
          />
        </div>
      </div>
    </div>
  )
}

export default CarouselComp

{
  /* <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
                WELCOME TO GRAPHYL
              </h3>
              <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
                For dreamers by creators For dreamers by creators For dreamers
                by For dreamers by creators For dreamers by creators creators
              </p>
              <button className="carousel-button-animation flex items-center gap-x-3">
                BOOK YOUR SLOT <ArrowRightOutlined />
              </button> */
}

// Laique Chutiyapa

//       <div className="lg:w-1/2">
//   <Carousel
//     dotPosition="top"
//     dots={true}
//      autoplay
//   >
// <div className="py-8 md:px-0 !max-w-full">
//   <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
//     WELCOME TO GRAPHYL
//   </h3>
//   <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
//     For dreamers by creators For dreamers by creators For dreamers
//     by For dreamers by creators For dreamers by creators creators
//   </p>
//   <button className="carousel-button-animation flex items-center gap-x-3">
//     BOOK YOUR SLOT <ArrowRightOutlined />
//   </button>
// </div>
//     <div className="py-8 md:px-0 !max-w-full">
//       <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
//         GO DIGITAL
//       </h3>
//       <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
//         For dreamers by creators For dreamers by creators For dreamers
//         by For dreamers by creators For dreamers by creators creators
//       </p>
//       <button className="carousel-button-animation flex items-center gap-x-3">
//         BOOK YOUR SLOT <ArrowRightOutlined />
//       </button>
//     </div>
//     <div className="py-8 md:px-0 !max-w-full">
//       <h3 className="text-2xl lg:text-5xl text-custom-color-h font-bold">
//         EXPAND YOUR BUSINESS
//       </h3>
//       <p className="text-xs md:text-sm text-custom-color-p py-4 md:w-3/4">
//         For dreamers by creators For dreamers by creators For dreamers
//         by For dreamers by creators For dreamers by creators creators
//       </p>
//       <button className="carousel-button-animation flex items-center gap-x-3">
//         BOOK YOUR SLOT <ArrowRightOutlined />
//       </button>
//     </div>
//   </Carousel>
// </div>
// <div className="lg:w-1/2 lg:py-20">
// <Image
//   preview={false}
//   src="https://res.cloudinary.com/graphyl/image/upload/v1658918094/graphyl-website-assets/services/Graphyl-Carousel_pkpraa.png"
//   className="lg:-mt-60 md:w-[50%] lg:w-[75%] mx-auto"
//   alt="carousel-img"
// />
// </div>
