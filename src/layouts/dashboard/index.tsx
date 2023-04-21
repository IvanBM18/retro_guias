//TODO: Fix type of getLayout
import { NextPageWithLayout } from '@/pages/_app';
import SideBar from '@/pages/dashboardPage/component/sideBar';
import DasboardEntries from '@/pages/dashboardPage/dashboardEntries';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react'

type Props = {
  children?: ReactElement;
};

const DashboardLayout  = ({children} : Props) => {
  return (
    <>
      <Head>
        <title>Retro Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/retrowiki.ico" />
      </Head>
      <main className='flex'>
        <SideBar/>
        {children}
      </main>
    </>
  )
}


export default DashboardLayout