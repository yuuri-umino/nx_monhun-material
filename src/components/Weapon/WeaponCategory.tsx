import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconGreatSword from '../../assets/icon-greatSword.png'
import Iconlongsword from '../../assets/icon-longsword.png'
import IconSword from '../../assets/icon-sword.png'
import IconDoubleSword from '../../assets/icon-doublesword.png'
import IconLance from '../../assets/icon-lance.png'
import IconGunLance from '../../assets/icon-gunlance.png'
import IconHummer from '../../assets/icon-hummer.png'
import IconHorn from '../../assets/icon-horn.png'
import IconSlashAx from '../../assets/icon-slashax.png'
import IconChargeAx from '../../assets/icon-chargeax.png'
import IconInsectStick from '../../assets/icon-insect.png'
import IconHeavyBowGun from '../../assets/icon-heavybowgun.png'
import IconLightBowGun from '../../assets/icon-lightbowgun.png'
import IconBow from '../../assets/icon-bow.png'

import { WeaponType } from '../../utils/weapon/materialsTypes'
interface WeaponCategoryProps {
  weaponTypes: WeaponType[]
  onWeaponClick: (weaponType: WeaponType) => void
}

const weaponIconList = [
  IconGreatSword,
  Iconlongsword,
  IconSword,
  IconDoubleSword,
  IconLance,
  IconGunLance,
  IconHummer,
  IconHorn,
  IconSlashAx,
  IconChargeAx,
  IconInsectStick,
  IconHeavyBowGun,
  IconLightBowGun,
  IconBow,
]

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
    // 次のセクションにジャンプ
    const selectWeaponSection = document.getElementById('derivated')
    if (selectWeaponSection) {
      selectWeaponSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <CategorySection id="category">
        <h2 className="toppan">1.武器種を選択する</h2>
        <div className="section-border">
          {weaponTypes.map((weaponType, index) => (
            <Button
              key={index}
              onClick={() => handleClick(weaponType)}
              className={
                selectedWeaponType === weaponType.type ? 'selected' : ''
              }
            >
              <Image
                src={weaponIconList[index]}
                alt=""
                width={100}
                height={100}
              />
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
    color: #a77d00;
    text-align: center;
  }
  .section-border {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f6dd94;
  }
  @media screen and (min-width: 576px) {
    .section-border {
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      padding-bottom: 30px;
      border-bottom: 3px solid #f6dd94;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      padding-bottom: 40px;
    }
  }
`

const Button = styled.button`
  padding: 0;
  background-color: #fff9db;
  border: 1px solid #d2a10e;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #fee66c;
  }
  img {
    width: 100%;
    height: 100%;
    padding: 2px;
  }
  &.selected {
    background-color: #fee66c;
  }
  @media screen and (min-width: 576px) {
    border: 2px solid #d2a10e;
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
