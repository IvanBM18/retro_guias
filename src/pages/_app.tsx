import '@/styles/globals.css'
import LandingLayout from '@/layouts/landing'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'


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

  // return (
  //   <>
  //     <AuthProvider>
  //       {getLayout(<Component {...pageProps} />)}
  //     </AuthProvider>
  //   </>
  // )

  return(
    <>
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err)
          },
        }}
      >
        {getLayout(<Component {...pageProps} />)}
    </SWRConfig>
    </>
  )
  
  
  // return (
  //   <LandingLayout>
  //     <Component {...pageProps} />
  //   </LandingLayout>
  // )
}
