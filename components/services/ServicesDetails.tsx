import { Row, Col, List, Image } from 'antd'
import React from 'react'
import { ServicesDetailsInterface } from '../../interface/interface'
import useWindowSize from '../../hooks/use-window-dimensions'

const ServicesDetails: React.FC<ServicesDetailsInterface> = ({
  title,
  desc,
  approaches,
  image,
  idx
}) => {
  const { width, height } = useWindowSize()

  return (
    <>
      {width > 768 ? (
        <div className={`${idx % 2 != 0 ? 'bg-black text-white py-20 px-5 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer' : ''} py-20 my-10`}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12} push={ idx % 2 != 0 ? 12 : 0 }>
            <h1 className="title" title={title}>
              {title}
            </h1>
            <p className={idx % 2 != 0 ? '' : 'mr-4'} >{desc}</p>
            <ul className="mt-6 space-y-2">
              {approaches.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={12} pull={ idx % 2 != 0 ? 12 : 0 }>
            <div className={`flex ${idx % 2 != 0 ? 'justify-center' : 'justify-end'}`}>
              <Image
                preview={false}
                // @ts-ignore
                src={image}
                width={400}
                className="sm:mt-10"
              />
            </div>
          </Col>
        </Row>
      </div>
      ) : (
        <div className={`${idx % 2 != 0 ? 'bg-black text-white px-5 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer' : ''} py-8 xl:py-20 my-10`}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <h1 className="title" title={title}>
              {title}
            </h1>
            <p>{desc}</p>
            <ul className="mt-6 space-y-2">
              {approaches.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <div className={`flex ${idx % 2 != 0 ? 'justify-center' : 'justify-end'}`}>
              <Image
                preview={false}
                // @ts-ignore
                src={image}
                width={400}
                className="sm:mt-10"
              />
            </div>
          </Col>
        </Row>
      </div>
      )}
    </>
  )
}

export default ServicesDetails
