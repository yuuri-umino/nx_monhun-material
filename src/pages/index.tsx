import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import WeaponCategory from '@/components/Weapon/WeaponCategory'
import WeaponDerivated from '@/components/Weapon/WeaponDerivated'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CustomHead title="TOP" description="" />
      <WeaponCategory />
      <WeaponDerivated />
    </>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
