import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconBlade from '../../assets/icon-blade.png'
import IconKatana from '../../assets/icon-katana.png'
import IconSword from '../../assets/icon-sword.png'
import IconDoubleSword from '../../assets/icon-doublesword.png'
import IconLance from '../../assets/icon-lance.png'
import IconGunLance from '../../assets/icon-gunlance.png'
import IconHummer from '../../assets/icon-hummer.png'
import IconHorn from '../../assets/icon-horn.png'
import IconSlashAx from '../../assets/icon-slashax.png'
import IconChargeAx from '../../assets/icon-chargeax.png'
import IconInsectStick from '../../assets/icon-insectstick.png'
import IconHeavyBowGun from '../../assets/icon-heavybowgun.png'
import IconLightBowGun from '../../assets/icon-lightbowgun.png'
import IconBow from '../../assets/icon-bow.png'

const weaponIconList = [
  IconBlade,
  IconKatana,
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

const WeaponCategory = () => {
  return (
    <>
      <CategorySection>
        <div className="section-border">
          {weaponIconList.map((icon, index) => (
            <Button key={index}>
              <Image src={icon} alt="weapon-icon" width={100} height={100} />
            </Button>
          ))}
        </div>
      </CategorySection>
    </>
  )
}

const CategorySection = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  width: calc(100% - 40px);
  margin-inline: auto;
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
    width: 80%;
    padding: 50px;
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
  @media screen and (min-width: 992px) {
    padding: 90px;
  }
`

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
  }
`

export default WeaponCategory
