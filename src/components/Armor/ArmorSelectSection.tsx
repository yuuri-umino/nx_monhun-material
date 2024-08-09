import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArmorCalculateResult from './ArmorCalculateResult'
import { Armor } from '../../utils/armor/materialsTypes'

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

  useEffect(() => {
    if (resetTrigger) {
      setCalculatedMaterials({})
    }
  }, [resetTrigger])

  const handleCheckboxChange = (armorName: string) => {
    setSelectedArmors((prevSelected) => {
      const newSelected = new Set(prevSelected)
      if (newSelected.has(armorName)) {
        newSelected.delete(armorName)
      } else {
        newSelected.add(armorName)
      }
      return newSelected
    })
  }

  const handleResetSelectedArmors = () => {
    setSelectedArmors(new Set())
  }

  const calculateMaterials = () => {
    setSelectedArmors(new Set())

    const materialsMap: { [key: string]: number } = {}
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

    setCalculatedMaterials(materialsMap)
  }

  return (
    <SelectSection id="select-armor">
      <section className="section-border">
        <h2 className="toppan mb-2">3.防具を選択する</h2>
        <p className="caution">シリーズを変更して選択できます。</p>
        <h3 className="toppan selected-derivation">{selectedDerivationName}</h3>
        <div className="armor-name d-flex flex-wrap justify-content-between align-items-center">
          {armors.map((armor, index) => (
            <button
              key={index}
              className={`vdl-shadow armor-item d-flex align-items-center my-2 py-1 px-2 px-md-4 ${
                selectedArmors.has(armor.name) ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleCheckboxChange(armor.name)}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="armor-checkbox"
                  checked={selectedArmors.has(armor.name)}
                  readOnly
                />
              </div>
              <p className="toppan mb-0 ms-1 ms-lg-4">{armor.name}</p>
            </button>
          ))}
        </div>

        <section className="selected-armors-list mt-3 mt-md-5">
          <h4 className="toppan text-center">現在選択している防具</h4>
          {selectedArmors.size === 0 && (
            <p className="save-caution">ここに選択した防具が表示されます。</p>
          )}

          {selectedArmors.size > 0 && (
            <button
              className="reset-btn vdl-shadow mb-4 d-block mx-auto"
              type="button"
              onClick={handleResetSelectedArmors}
            >
              RESET
            </button>
          )}

          <ul>
            {Array.from(selectedArmors).map((armorName) => (
              <li key={armorName} className="text-center mb-3 py-1 fw-bold">
                {armorName}
              </li>
            ))}
          </ul>
        </section>

        <button
          className="toppan calc-btn py-2"
          type="button"
          onClick={calculateMaterials}
        >
          Calculate!
        </button>

        <ArmorCalculateResult
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
    border-bottom: 2px solid #f6874f;
    h2 {
      margin-bottom: 30px;
      color: #c8551b;
      text-align: center;
    }
    .caution {
      font-size: 12px;
      color: #494949;
      text-align: center;
    }
    .selected-derivation {
      font-size: 18px;
      text-align: center;
      color: #333;
    }
  }
  .armor-name {
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #f6874f;
    padding: 10px;
    &::after {
      content: '';
      display: block;
      width: 100%;
    }
  }
  .armor-item {
    background-color: #fff3ed;
    border: none;
    border-radius: 6px;
    color: #c8551b;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    p {
      font-size: 14px;
    }
    .armor-icon {
      width: 25px;
      height: auto;
    }
    &:hover {
      background-color: #ffd1ba;
    }
    &.selected {
      background-color: #ffd1ba;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  .armor-checkbox {
    position: relative;
    width: 1rem;
    height: 1rem;
    appearance: none;
    &::before {
      background: #fff;
      border: 2px solid #f6874f;
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
      border-right: 3px solid #f6874f;
      border-bottom: 3px solid #f6874f;
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
    color: #f6874f;
    transition: 0.3s ease-in-out;
    text-align: center;
    background-color: transparent;
    border: none;
    &::before,
    &::after {
      content: '';
      width: 18px;
      height: 18px;
      border-color: #f6874f;
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
      border-color: #f6874f;
    }
    &:hover {
      color: #fff;
      background-color: #f6874f;
      border-color: #f6874f;
    }
  }
  .selected-armors-list {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        background-color: #fff3ed;
        border: none;
        border-radius: 6px;
        color: #c8551b;
        width: 100%;
      }
    }
  }
  .reset-btn {
    position: relative;
    background-color: #fff;
    border: 2px solid #f6874f;
    color: #f6874f;
    font-size: 14px;
    border-radius: 50px;
    padding: 5px 20px;
    box-shadow: 2px 2px 0 0 #f6874f;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(2px, 2px);
      border: 2px solid #f6874f;
      box-shadow: none;
    }
  }
  .save-caution {
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
  }
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 3px solid #f6874f;
      .selected-derivation {
        font-size: 24px;
      }
    }
    .armor-name {
      &::after {
        width: 47%;
      }
    }
    .armor-item {
      width: 47%;
    }
    .reset-btn {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      padding: 40px 0;
    }
    .calc-btn {
      margin-top: 40px;
    }
    .selected-armors-list {
      ul {
        &::after {
          content: '';
          display: block;
          width: 32%;
        }
        li {
          background-color: #fff3ed;
          border: none;
          border-radius: 6px;
          color: #c8551b;
          width: 32%;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .armor-item {
      p {
        font-size: 16px;
      }
    }
  }
`

export default ArmorSelectSection
