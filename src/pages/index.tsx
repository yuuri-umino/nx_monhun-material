import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CustomHead title="TOP" description="" />
    </>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
