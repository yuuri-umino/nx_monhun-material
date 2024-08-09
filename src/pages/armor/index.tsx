import { useState, useEffect } from 'react'
import { NextPageWithLayout } from 'next'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import DefaultLayout from '@/components/layout/default-layout'
import CustomHead from '@/components/organisms/head'
import ArmorCategory from '@/components/Armor/ArmorCategory'
import ArmorDerivated from '@/components/Armor/ArmorDerivated'
import ArmorSelectSection from '@/components/Armor/ArmorSelectSection'
import HowToUse from '@/components/Armor/HowToUse'
import SideButtonNav from '@/components/Armor/SideButtonNav'

import { ArmorType, Armor } from '../../utils/armor/materialsTypes'
import lower from '../../utils/armor/lower'
import topper from '../../utils/armor/topper'
import ex from '../../utils/armor/ex'

const armorTypes: ArmorType[] = [lower, topper, ex]

const Home: NextPageWithLayout = () => {
  const [selectedArmor, setSelectedArmor] = useState<ArmorType | null>(lower)
  const [selectedArmors, setSelectedArmors] = useState<Armor[]>([])
  const [selectedDerivationName, setSelectedDerivationName] = useState<
    string | null
  >(null)
  const [resetTrigger, setResetTrigger] = useState(false)

  useEffect(() => {
    if (selectedArmor) {
      setSelectedArmors(selectedArmor.derivations[0]?.armors || [])
      setSelectedDerivationName(selectedArmor.derivations[0]?.name || null)
    }
  }, [selectedArmor])

  const handleArmorClick = (armorType: ArmorType) => {
    setSelectedArmor(armorType)
    setResetTrigger((prev) => !prev)
  }

  const handleSelectDerivation = (armors: Armor[], derivationName: string) => {
    setSelectedArmors(armors)
    setSelectedDerivationName(derivationName)
    setResetTrigger((prev) => !prev)
  }

  return (
    <>
      <NextSeo
        title="防具素材計算ツール"
        description="モンスターハンターアイスボーンの防具素材を計算できるツールです。"
      />
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
          armors={selectedArmors}
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
