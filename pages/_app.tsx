import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  )
}

export default MyApp
