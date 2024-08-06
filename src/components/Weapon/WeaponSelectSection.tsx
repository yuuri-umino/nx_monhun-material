import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import WeaponCalculateResult from './WeaponCalculateResult'

import { Weapon } from '../../utils/materialsTypes'
interface SelectProps {
  weapons: Weapon[]
  selectedDerivationName: string | null
  resetTrigger: boolean
}

const WeaponSelectSection: React.FC<SelectProps> = ({
  weapons,
  selectedDerivationName,
  resetTrigger,
}) => {
  const [selectedWeapons, setSelectedWeapons] = useState<Set<string>>(new Set())
  const [calculatedMaterials, setCalculatedMaterials] = useState<{
    [key: string]: number
  }>({})

  useEffect(() => {
    setSelectedWeapons(new Set())
    setCalculatedMaterials({})
  }, [resetTrigger])

  const handleCheckboxChange = (weaponName: string) => {
    setSelectedWeapons((prevSelected) => {
      const newSelected = new Set(prevSelected)
      if (newSelected.has(weaponName)) {
        newSelected.delete(weaponName)
      } else {
        newSelected.add(weaponName)
      }
      return newSelected
    })
  }

  const calculateMaterials = () => {
    const materialsMap: { [key: string]: number } = {}

    weapons.forEach((weapon) => {
      if (selectedWeapons.has(weapon.name)) {
        weapon.materials.forEach((material) => {
          if (materialsMap[material.name]) {
            materialsMap[material.name] += material.quantity
          } else {
            materialsMap[material.name] = material.quantity
          }
        })
      }
    })

    setCalculatedMaterials(materialsMap)
  }

  return (
    <SelectSection id="select-weapon">
      <section className="section-border">
        <h2 className="toppan">3.武器を選択する</h2>
        <h3 className="toppan selected-derivation">{selectedDerivationName}</h3>
        <div className="weapon-name d-flex flex-wrap justify-content-between align-items-center">
          {weapons.map((weapon, index) => (
            <button
              key={index}
              className={`vdl-shadow weapon-item d-flex align-items-center my-2 py-1 px-2 px-md-4 ${
                selectedWeapons.has(weapon.name) ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleCheckboxChange(weapon.name)}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="weapon-checkbox"
                  checked={selectedWeapons.has(weapon.name)}
                  readOnly
                />
              </div>
              <p className="toppan mb-0 ms-1 ms-lg-4">{weapon.name}</p>
            </button>
          ))}
        </div>

        <button
          className="toppan calc-btn py-2"
          type="button"
          onClick={calculateMaterials}
        >
          Calculate!
        </button>

        <WeaponCalculateResult
          materials={calculatedMaterials}
          resetTrigger={resetTrigger}
          setCalculatedMaterials={setCalculatedMaterials}
        />
      </section>
    </SelectSection>
  )
}

const SelectSection = styled.div`
  margin-inline: auto;
  .section-border {
    padding: 20px 0;
    border-bottom: 2px solid #f6dd94;
    h2 {
      margin-bottom: 30px;
      color: #a77d00;
      text-align: center;
    }
    .selected-derivation {
      font-size: 18px;
      text-align: center;
      color: #333;
    }
  }
  .weapon-name {
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #d29204;
    padding: 10px;
    &::after {
      content: '';
      display: block;
      width: 100%;
    }
  }
  .weapon-item {
    background-color: #fff9db;
    border: none;
    border-radius: 6px;
    color: #a77d00;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    p {
      font-size: 14px;
    }
    .weapon-icon {
      width: 25px;
      height: auto;
    }
    &:hover {
      opacity: 0.8;
    }
    &.selected {
      background-color: #fee66c;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  .weapon-checkbox {
    position: relative;
    width: 1rem;
    height: 1rem;
    appearance: none;
    &::before {
      background: #fff;
      border: 2px solid #d2a10e;
      border-radius: 3px;
      content: '';
      display: block;
      height: 16px;
      left: 5px;
      margin-top: -8px;
      position: absolute;
      top: 50%;
      width: 16px;
    }
    &::after {
      border-right: 3px solid #81630a;
      border-bottom: 3px solid #81630a;
      content: '';
      display: block;
      height: 11px;
      left: 10px;
      margin-top: -7px;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: rotate(45deg);
      width: 6px;
    }
    &:checked::after {
      opacity: 1;
    }
  }
  .calc-btn {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 180px;
    margin-top: 40px;
    margin-inline: auto;
    color: #d29204;
    transition: 0.3s ease-in-out;
    text-align: center;
    background-color: transparent;
    border: none;
    &::before,
    &::after {
      content: '';
      width: 18px;
      height: 18px;
      border-color: #d29204;
      box-sizing: border-box;
      border-style: solid;
      display: block;
      position: absolute;
      transition: all 0.3s ease-in-out;
    }
    &:before {
      top: -6px;
      left: -6px;
      border-width: 2px 0 0 2px;
      z-index: 5;
    }
    &:after {
      bottom: -6px;
      right: -6px;
      border-width: 0 2px 2px 0;
    }
    &:hover:before,
    &:hover:after {
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-color: #d29204;
    }
    &:hover {
      color: #fff;
      background-color: #d29204;
      border-color: #d29204;
    }
  }
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 3px solid #f6dd94;
      .selected-derivation {
        font-size: 24px;
      }
    }
    .weapon-name {
      &::after {
        width: 47%;
      }
    }
    .weapon-item {
      width: 47%;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      padding: 40px 0;
    }
    .calc-btn {
      margin-top: 40px;
    }
  }
  @media screen and (min-width: 992px) {
    .weapon-item {
      p {
        font-size: 16px;
      }
    }
  }
`

export default WeaponSelectSection
