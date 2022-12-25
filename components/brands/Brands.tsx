import { Col, Row } from 'antd'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

const Brands = () => {
  return (
    <div className="bg-black py-8">
      <Row align="middle" className="mw-container">
        <Col xs={24} md={8} className="mb-10 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">
            Brands we have worked with.
          </h1>
        </Col>
        <Col xs={24} md={14}>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay
          >
            <SwiperSlide>
              <img src="/kbsrt.png" alt="brand-logo" width={70} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/amrtm.png" alt="brand-logo" width={100} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/ntrs.png"
                alt="brand-logo"
                width={100}
                className=" pt-4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/nzmi.png" alt="brand-logo" width={100} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/gcd.png"
                alt="brand-logo"
                width={250}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </div>
  )
}

export default Brands
