import { ReactElement, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import Router from 'next/router'
import { useLoadingProgress } from 'src/services'

type Props = {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children, ...props }: Props): ReactElement => {
  const { start, done } = useLoadingProgress()

  const onRouteChangeStart = () => {
    start()
  }

  const onRouteChangeComplete = () => {
    setTimeout(() => {
      done()
    }, 1)
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart)
    Router.events.on('routeChangeComplete', onRouteChangeComplete)
    Router.events.on('routeChangeError', onRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart)
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
      Router.events.off('routeChangeError', onRouteChangeComplete)
    }
  }, [])

  return (
    <Flex direction="column" maxW={{ xl: '1200px' }} m="0 auto" p={6} {...props}>
      {children}
    </Flex>
  )
}

export default Layout
