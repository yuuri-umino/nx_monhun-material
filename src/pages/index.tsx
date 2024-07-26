import { useState } from 'react'
import { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import WeaponCategory from '@/components/Weapon/WeaponCategory'
import WeaponDerivated from '@/components/Weapon/WeaponDerivated'
import WeaponSelectSection from '@/components/Weapon/WeaponSelectSection'

import { WeaponType } from '../utils/materialsTypes'
import greatSword from '../utils/greatSword'
import sword from '../utils/sword'
import katana from '../utils/katana'
import doubleSword from '../utils/doubleSword'
import lance from '../utils/lance'
import gunLance from '../utils/gunLance'
import hummer from '../utils/hummer'
import horn from '../utils/greatSword'
import slashAx from '../utils/slashAx'
import chargeAx from '../utils/chargeAx'
import insectStick from '../utils/insectStick'
import heavyBowGun from '../utils/heavyBowGun'
import lightBowGun from '../utils/lightBowGun'
import bow from '../utils/bow'

const weaponTypes: WeaponType[] = [
  greatSword,
  katana,
  sword,
  doubleSword,
  lance,
  gunLance,
  hummer,
  horn,
  slashAx,
  chargeAx,
  insectStick,
  heavyBowGun,
  lightBowGun,
  bow,
]

const Home: NextPageWithLayout = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponType | null>(null)

  const handleWeaponClick = (weaponType: WeaponType) => {
    setSelectedWeapon(weaponType)
  }
  return (
    <>
      <CustomHead title="TOP" description="" />
      <MainContents>
        <WeaponCategory
          weaponTypes={weaponTypes}
          onWeaponClick={handleWeaponClick}
        />
        {selectedWeapon && (
          <WeaponDerivated derivations={selectedWeapon.derivations} />
        )}
        <WeaponSelectSection />
      </MainContents>
    </>
  )
}

const MainContents = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  width: calc(100% - 40px);
  margin-inline: auto;
  @media screen and (min-width: 576px) {
    width: 80%;
    padding: 50px;
  }
  @media screen and (min-width: 992px) {
    padding: 90px;
  }
`

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
