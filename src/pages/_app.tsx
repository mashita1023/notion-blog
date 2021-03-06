import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }) {
  const router = useROuter()
  useEffect(() => {
    const handleRouteChage = url => {
      if (localtion.host === 'alpacat.com') {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}


