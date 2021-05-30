import 'src/styles/globals.css'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from 'src/ui'
import { LoadingProgressProvider } from 'src/services'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <LoadingProgressProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProgressProvider>
    </ChakraProvider>
  )
}

export default MyApp
