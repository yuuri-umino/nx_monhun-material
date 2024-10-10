import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArmorCalculateResult from './ArmorCalculateResult'
import { Armor } from '../../utils/armor/materialsTypes'
import CalculateBtn from '../ItemSelectSection/colculateBtn'
import ItemList from '../ItemSelectSection/ItemList'
import ListTitle from '../ItemSelectSection/ListTitle'

interface SelectProps {
  armors: Armor[]
  selectedDerivationName: string | null
  resetTrigger: boolean
}

const ArmorSelectSection: React.FC<SelectProps> = ({
  armors,
  selectedDerivationName,
  resetTrigger,
}) => {
  const [selectedArmors, setSelectedArmors] = useState<Set<string>>(new Set())
  const [calculatedMaterials, setCalculatedMaterials] = useState<{
    [key: string]: number
  }>({})

  const [selectedArmorNames, setSelectedArmorNames] = useState<string[]>([])
  const [calculatedArmorNames, setCalculatedArmorNames] = useState<string[]>([]) // 計算結果用の防具名を保持

  useEffect(() => {
    setSelectedArmors(new Set())
    setCalculatedMaterials({})
  }, [resetTrigger])

  const handleCheckboxChange = (armorName: string) => {
    setSelectedArmors((prevSelected) => {
      const newSelected = new Set(prevSelected)
      if (newSelected.has(armorName)) {
        newSelected.delete(armorName)
      } else {
        newSelected.add(armorName)
      }
      // 選択された防具名リストを更新
      setSelectedArmorNames(Array.from(newSelected))
      return newSelected
    })
  }

  const calculateMaterials = () => {
    const materialsMap: { [key: string]: number } = {}
    console.log('Selected weapons:', selectedArmors)

    // 次のセクションにジャンプ
    const selectArmorSection = document.getElementById('result')
    if (selectArmorSection) {
      selectArmorSection.scrollIntoView({ behavior: 'smooth' })
    }

    armors.forEach((armor) => {
      if (selectedArmors.has(armor.name)) {
        armor.materials.forEach((material) => {
          if (materialsMap[material.name]) {
            materialsMap[material.name] += material.quantity
          } else {
            materialsMap[material.name] = material.quantity
          }
        })
      }
    })

    // 素材の計算結果を保存
    setCalculatedMaterials(materialsMap)

    // 計算結果として表示する防具名を保存
    setCalculatedArmorNames(selectedArmorNames)

    // 選択されたアイテムをリセット
    setSelectedArmors(new Set())
    setSelectedArmorNames([]) // 選択した防具名はリセット
  }

  return (
    <SelectSection id="select-armor">
      <section className="section-border">
        <h2 className="toppan">3.防具を選択する</h2>

        <ListTitle selectedDerivationName={selectedDerivationName} />

        <ItemList
          armors={armors}
          selectedItems={selectedArmors}
          handleCheckboxChange={handleCheckboxChange}
        />

        <CalculateBtn onClick={calculateMaterials} />

        <ArmorCalculateResult
          materials={calculatedMaterials}
          resetTrigger={resetTrigger}
          setCalculatedMaterials={setCalculatedMaterials}
          selectedArmorNames={calculatedArmorNames}
        />
      </section>
    </SelectSection>
  )
}

const SelectSection = styled.div`
  margin-inline: auto;
  .section-border {
    padding: 20px 0;
    border-bottom: 2px solid #f6874f;
    h2 {
      margin-bottom: 30px;
      color: #c8551b;
      text-align: center;
    }
  }
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 2px solid #f6874f;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      padding: 40px 0;
    }
  }
`

export default ArmorSelectSection
