import React, { useState } from 'react'
import styled from 'styled-components'

import { WeaponType } from '@/utils/weapon/materialsTypes'

interface WeaponCategoryProps {
  weaponTypes: WeaponType[]
  onWeaponClick: (weaponType: WeaponType) => void
}

const weaponRankList = ['上位', 'マスター', 'EX']

const WeaponCategory: React.FC<WeaponCategoryProps> = ({
  weaponTypes,
  onWeaponClick,
}) => {
  const [selectedWeaponType, setSelectedWeaponType] = useState<string | null>(
    null
  )

  const handleClick = (weaponType: WeaponType) => {
    setSelectedWeaponType(weaponType.type)
    onWeaponClick(weaponType)
  }

  return (
    <>
      <CategorySection id="category">
        <h2 className="toppan">1.ランクを選択する</h2>
        <div className="section-border lank-list">
          {weaponTypes.map((weaponType, index) => (
            <Button
              key={index}
              onClick={() => handleClick(weaponType)}
              className={
                selectedWeaponType === weaponType.type ? 'selected' : ''
              }
            >
              {weaponRankList[index]}
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
    padding-bottom: 20px;
    border-bottom: 2px solid #f6874f;
    button {
      width: fit-content;
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
    opacity: 0.6;
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

export default WeaponCategory
