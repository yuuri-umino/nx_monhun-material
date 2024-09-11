import { FC, ReactNode } from 'react'
import { GoogleTagManager } from '@next/third-parties/google'
import styled from 'styled-components'
import Head from '@/components/organisms/head'
import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = (props) => {
  //:props
  return (
    <>
      <Head title={''} description={''} />
      <Header />
      <GoogleTagManager gtmId="GTM-PFRK7983" />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main``
export default DefaultLayout
