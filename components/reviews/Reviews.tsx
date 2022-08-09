import { StarTwoTone, UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Row } from 'antd'
import React from 'react'
import { A11y, Autoplay, EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useWindowSize from '../../hooks/use-window-dimensions'

const Reviews = () => {
  const { width } = useWindowSize()
  const reviews = [
    {
      name: 'Sohail Hussain',
      desc: 'No doubt that Graphyl is a team of professionals. Quite satisfied with their work. They are reliable and available at any time when needed. As a cleint I would recommend them to all those looking for a professional website.',
      stars: 4,
    },
    {
      name: 'Shudesh Shukla',
      desc: 'Best Web Designers in Thane, Great experience!',
      stars: 5,
    },
    {
      name: 'Praful Rajan',
      desc: 'Best Experienced Web Developers ever I worked with. Highly appreciated with my business website done by them.',
      stars: 5,
    },
    {
      name: 'Abdul Gaffar Kazi',
      desc: 'Got my first website designed by Graphyl. Within in a few days after contacting Graphyl my website was up and running. Absolutely satisfied by their work. Kudos to team Graphyl.',
      stars: 4,
    },
    {
      name: 'Nilesh Rai',
      desc: 'Best of luck LAKSN team...It wz a great experience working with you guyz...Your on time delivery of projects is what matters a lot in todays busy schedule....Also the way you guyz work on each projects is appreciable....keep it up....and wish you good luck for future....',
      stars: 5,
    },
  ]

  const returnStars = (startCount: number): number[] => {
    const stars = []
    for (let i = 0; i < startCount; i++) {
      stars.push(i)
    }

    return stars
  }
  return (
    <div className="pb-12">
      <div className="text-center mb-10">
        <h2 className="inline-block text-2xl relative title-effect">
          Testimonials
        </h2>
      </div>
      <Row justify="center">
        {width > 600 && (
          <Col xs={24} md={10} className="px-0 md:px-10">
            <h1 className="text-6xl mb-1 text-accent rotate-180 text-right">
              ❞
            </h1>
            <h1 className="text-3xl lg:text-4xl text-gray">
              What our clients say about us
            </h1>
          </Col>
        )}
        <Col xs={24} md={12}>
          <Swiper
            modules={[A11y, Autoplay, EffectCards]}
            spaceBetween={100}
            autoplay
            effect="cards"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="px-8 py-4">
                <Card bordered={true} className="shadow">
                  <Row>
                    <Col className="mb-4">
                      <div className="flex items-center">
                        <Avatar
                          icon={<UserOutlined style={{ fontSize: 48 }} />}
                          size={64}
                        />
                        <div className="ml-3">
                          <p>{review.name}</p>
                          {returnStars(review.stars).map((x) => (
                            <StarTwoTone key={x} />
                          ))}
                        </div>
                      </div>
                    </Col>
                    <Col>{review.desc}</Col>
                  </Row>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  )
}

export default Reviews
