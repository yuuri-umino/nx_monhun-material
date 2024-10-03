import { useState, useEffect } from 'react'
import { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import ArmorCategory from '@/components/Armor/ArmorCategory'
import ArmorDerivated from '@/components/Armor/ArmorDerivated'
import ArmorSelectSection from '@/components/Armor/ArmorSelectSection'
import HowToUse from '@/components/HowToUse'
import SideButtonNav from '@/components/SideButtonNav'

import { ArmorType, Armor } from '../../utils/armor/materialsTypes'
import lower from '../../utils/armor/lower'
import topper from '../../utils/armor/topper'
import ex from '../../utils/armor/ex'

const armorTypes: ArmorType[] = [lower, topper, ex]

const Home: NextPageWithLayout = () => {
  const [selectedArmor, setSelectedArmor] = useState<ArmorType | null>(lower)
  const [selectedArmors, setSelectedArmors] = useState<Map<string, Armor>>(
    new Map()
  )
  const [displayedArmors, setDisplayedArmors] = useState<Armor[]>([])
  const [selectedDerivationName, setSelectedDerivationName] = useState<
    string | null
  >(null)
  const [resetTrigger, setResetTrigger] = useState(false)

  useEffect(() => {
    if (selectedArmor) {
      setDisplayedArmors(selectedArmor.derivations[0]?.armors || [])
      setSelectedDerivationName(selectedArmor.derivations[0]?.name || null)
    }
  }, [selectedArmor])

  const handleArmorClick = (armorType: ArmorType) => {
    setSelectedArmor(armorType)
    setResetTrigger((prev) => !prev)
  }

  const handleSelectDerivation = (armors: Armor[], derivationName: string) => {
    setDisplayedArmors(armors)
    setSelectedDerivationName(derivationName)
  }

  const handleArmorSelection = (armorName: string, armor: Armor) => {
    setSelectedArmors((prevSelected) => {
      const newSelected = new Map(prevSelected)
      if (newSelected.has(armorName)) {
        newSelected.delete(armorName)
      } else {
        newSelected.set(armorName, armor)
      }
      return newSelected
    })
  }

  return (
    <>
      <CustomHead
        title="防具素材"
        description="モンスターハンターアイスボーンの防具素材を計算できるツールです。"
      />
      <SideButtonNav />
      <HowToUse />
      <MainContents>
        <ArmorCategory
          armorTypes={armorTypes}
          onArmorClick={handleArmorClick}
        />
        {selectedArmor && (
          <ArmorDerivated
            derivations={selectedArmor.derivations}
            onSelectDerivation={handleSelectDerivation}
          />
        )}
        <ArmorSelectSection
          armors={displayedArmors}
          selectedArmors={selectedArmors}
          selectedDerivationName={selectedDerivationName}
          resetTrigger={resetTrigger}
          onArmorSelect={handleArmorSelection}
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
