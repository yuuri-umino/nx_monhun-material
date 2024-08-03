import { useState, useEffect } from 'react'
import { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import WeaponCategory from '@/components/Weapon/WeaponCategory'
import WeaponDerivated from '@/components/Weapon/WeaponDerivated'
import WeaponSelectSection from '@/components/Weapon/WeaponSelectSection'
import HowToUse from '@/components/Weapon/HowToUse'
import SideButtonNav from '@/components/Weapon/SideButtonNav'

import { WeaponType, Weapon } from '../utils/materialsTypes'
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
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponType | null>(
    greatSword
  )
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([])
  const [selectedDerivationName, setSelectedDerivationName] = useState<
    string | null
  >(null)
  const [resetTrigger, setResetTrigger] = useState(false)

  useEffect(() => {
    if (selectedWeapon) {
      setSelectedWeapons(selectedWeapon.derivations[0]?.weapons || [])
      setSelectedDerivationName(selectedWeapon.derivations[0]?.name || null)
    }
  }, [selectedWeapon])

  const handleWeaponClick = (weaponType: WeaponType) => {
    setSelectedWeapon(weaponType)
    setResetTrigger((prev) => !prev)
  }

  const handleSelectDerivation = (
    weapons: Weapon[],
    derivationName: string
  ) => {
    setSelectedWeapons(weapons)
    setSelectedDerivationName(derivationName)
    setResetTrigger((prev) => !prev)
  }

  return (
    <>
      <CustomHead title="TOP" description="" />
      <SideButtonNav />
      <HowToUse />
      <MainContents>
        <WeaponCategory
          weaponTypes={weaponTypes}
          onWeaponClick={handleWeaponClick}
        />
        {selectedWeapon && (
          <WeaponDerivated
            derivations={selectedWeapon.derivations}
            onSelectDerivation={handleSelectDerivation}
          />
        )}
        <WeaponSelectSection
          weapons={selectedWeapons}
          selectedDerivationName={selectedDerivationName}
          resetTrigger={resetTrigger}
        />
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
