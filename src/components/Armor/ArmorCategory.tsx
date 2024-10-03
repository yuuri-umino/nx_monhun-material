import React, { useState } from 'react'
import styled from 'styled-components'

import { ArmorType } from '@/utils/armor/materialsTypes'

interface ArmorCategoryProps {
  armorTypes: ArmorType[]
  onArmorClick: (armorType: ArmorType) => void
}

const armorRankList = ['下位', '上位', 'EX']

const ArmorCategory: React.FC<ArmorCategoryProps> = ({
  armorTypes,
  onArmorClick,
}) => {
  const [selectedArmorType, setSelectedArmorType] = useState<string | null>(
    null
  )

  const handleClick = (armorType: ArmorType) => {
    setSelectedArmorType(armorType.type)
    onArmorClick(armorType)

    // 次にジャンプ
    const selectArmorSection = document.getElementById('derivated')
    if (selectArmorSection) {
      selectArmorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <CategorySection id="category">
        <h2 className="toppan">1.ランクを選択する</h2>
        <div className="section-border lank-list toppan">
          {armorTypes.map((armorType, index) => (
            <Button
              key={index}
              onClick={() => handleClick(armorType)}
              className={selectedArmorType === armorType.type ? 'selected' : ''}
            >
              {armorRankList[index]}
            </Button>
          ))}
        </div>
      </CategorySection>
    </>
  )
}

const CategorySection = styled.div`
  h2 {
    margin-bottom: 30px;
    color: #c8551b;
    text-align: center;
  }
  .lank-list {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f6874f;
    button {
      width: 100px;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 576px) {
    .lank-list {
      padding-bottom: 30px;
      border-bottom: 3px solid #f6874f;
    }
  }
  @media screen and (min-width: 768px) {
    .lank-list {
      padding-bottom: 40px;
    }
  }
`

const Button = styled.button`
  padding: 0;
  background-color: #fff3ed;
  border: 1px solid #ffb792;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ffd1ba;
  }
  img {
    width: 100%;
    padding: 2px;
  }
  &.selected {
    background-color: #ffd1ba;
  }
  @media screen and (min-width: 576px) {
    border: 2px solid #ffb792;
  }
  @media screen and (min-width: 768px) {
    img {
      padding: 5px;
    }
  }
  @media screen and (min-width: 992px) {
  }
`

export default ArmorCategory
