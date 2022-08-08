import Head from 'next/head'
import { ServicesDetails, TechStack } from '../components'
import { servicesData } from '../utils/data'

const services = () => {
  const images = [
    'https://res.cloudinary.com/graphyl/image/upload/v1654417835/graphyl-website-assets/services/web-dev_gnmcyu.png',
    'https://res.cloudinary.com/graphyl/image/upload/v1654417820/graphyl-website-assets/services/mobile-app_n73jqp.png',
    'https://res.cloudinary.com/graphyl/image/upload/v1654417821/graphyl-website-assets/services/desktop_bw2mso.png',
    'https://res.cloudinary.com/graphyl/image/upload/v1654417838/graphyl-website-assets/services/ui-ux_blgvti.png',
    'https://res.cloudinary.com/graphyl/image/upload/v1654417839/graphyl-website-assets/services/maintenance_retimg.png',
    'https://res.cloudinary.com/graphyl/image/upload/v1654417837/graphyl-website-assets/services/testing_atvjb3.png',
  ]

  return (
    <>
      <Head>
        <title>Graphyl | Services</title>
        <meta
          name="description"
          content="We are a software development and consultancy service. We help small to medium scale businesses to build their online presence. Come work with us | For dreamers by creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 xl:px-0 py-10 xl:py-16">
        <div className="mw-container text-center">
          <h1 className="inline-block relative title-effect">Our Services</h1>
          <p className="text-gray mt-6">
            Being a Tech Startup and having expertise and experience in almost
            all development and testing areas, We at Graphyl Provide Scalable
            and Robust solutions which can curb all your essential needs right
            from root to making it big. Graphyl offers highly capable, efﬁcient,
            and proven Development and Maintenance Services using your preferred
            technologies and methodologies
          </p>
        </div>

        <div className="py-10 xl:py-20">
          <div className="mw-container">
            {servicesData.map((service, idx) => (
              <ServicesDetails
                key={idx}
                title={service.title}
                desc={service.desc}
                approaches={service.approaches}
                image={images[service.image - 1]}
                idx={idx}
              />
            ))}
          </div>
        </div>

        <div>
          <TechStack />
        </div>
      </div>
    </>
  )
}

export default services
