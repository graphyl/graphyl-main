import 'antd/dist/antd.css'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
