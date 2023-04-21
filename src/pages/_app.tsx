import '@/styles/globals.css'
import LandingLayout from '@/layouts/landing'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page:ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => {
    return(
      <LandingLayout>
        {page}
      </LandingLayout>
    )
  })

  return getLayout(<Component {...pageProps} />)
  // return (
  //   <LandingLayout>
  //     <Component {...pageProps} />
  //   </LandingLayout>
  // )
}
