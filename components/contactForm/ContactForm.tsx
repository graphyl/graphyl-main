import { useForm } from '@formspree/react'
import { Form, message, Row, Col, Input, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useState } from 'react'

const ContactForm = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, handleSubmit] = useForm('mqknnozo')
  const [contactForm] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const submitContactForm = (values: {
    name: string
    email: string
    message: string
  }) => {
    setLoading(true)

    handleSubmit(values)
      .then((res) => {
        if (res.response.status === 200) {
          contactForm.resetFields()
          message.success(
            'Thanks for reaching out to us 👌, Will get back to you soon!',
            4
          )
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        message.error('Something went wrong!')
        setLoading(false)
      })
  }

  return (
    <>
      <div className="space-y-16">
        <Row gutter={32} align="middle" justify="center">
          <Col xs={24} md={16} xl={14} className="w-max">
            <Form
              form={contactForm}
              name="contactForm"
              layout="vertical"
              onFinish={submitContactForm}
            >
              <Row className="md:px-10" align="middle">
                <Col xs={24}>
                  <Form.Item
                    label={<span className="text-biscuit">Name</span>}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your name!',
                      },
                    ]}
                  >
                    <Input placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label={<span className="text-biscuit">Email</span>}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email!',
                      },
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                    ]}
                  >
                    <Input placeholder="Your Email" type="email" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label={<span className="text-biscuit">Message</span>}
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your reason for contactinga!',
                      },
                    ]}
                  >
                    <TextArea placeholder="Your Message" rows={5} />
                  </Form.Item>
                </Col>
                <Col xs={24} className="text-right">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ContactForm
