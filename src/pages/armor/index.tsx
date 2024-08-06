import { useState, useEffect } from 'react'
import { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import ArmorCategory from '@/components/Armor/ArmorCategory'
import ArmorDerivated from '@/components/Armor/ArmorDerivated'
import ArmorSelectSection from '@/components/Armor/ArmorSelectSection'
import HowToUse from '@/components/Armor/HowToUse'
import SideButtonNav from '@/components/Armor/SideButtonNav'

import { WeaponType, Weapon } from '../../utils/weapon/materialsTypes'
import greatSword from '../../utils/weapon/greatSword'
import sword from '../../utils/weapon/sword'
import longSword from '../../utils/weapon/longSword'
import doubleSword from '../../utils/weapon/doubleSword'
import lance from '../../utils/weapon/lance'
import gunLance from '../../utils/weapon/gunLance'
import hummer from '../../utils/weapon/hummer'
import horn from '../../utils/weapon/horn'
import slashAx from '../../utils/weapon/slashAx'
import chargeAx from '../../utils/weapon/chargeAx'
import insect from '../../utils/weapon/insect'
import heavyBowGun from '../../utils/weapon/heavyBowGun'
import lightBowGun from '../../utils/weapon/lightBowGun'
import bow from '../../utils/weapon/bow'

const weaponTypes: WeaponType[] = [
  greatSword,
  longSword,
  sword,
  doubleSword,
  lance,
  gunLance,
  hummer,
  horn,
  slashAx,
  chargeAx,
  insect,
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
        <ArmorCategory
          weaponTypes={weaponTypes}
          onWeaponClick={handleWeaponClick}
        />
        {selectedWeapon && (
          <ArmorDerivated
            derivations={selectedWeapon.derivations}
            onSelectDerivation={handleSelectDerivation}
          />
        )}
        <ArmorSelectSection
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
