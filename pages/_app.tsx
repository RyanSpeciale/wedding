import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    tab: {
      color: 'black'
    },
    formField: {
      label: {
        requiredIndicator: true
      }
    }

  }
  
  
  
  return (
    <Grommet theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  )
}

export default MyApp
