import { FC, ReactNode } from 'react'
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
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main``
export default DefaultLayout
