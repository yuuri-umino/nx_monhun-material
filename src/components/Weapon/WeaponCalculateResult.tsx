import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import IconOk from '../../assets/icon-ok.png'
import { materialsDrops } from '../../utils/materialsDrops'
import SaveModal from './SaveModal'
import SavedDataSection from './SavedDataSection'

interface CalculateResultProps {
  materials: { [key: string]: number }
  setCalculatedMaterials: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >
}

const WeaponCalculateResult: React.FC<
  CalculateResultProps & { resetTrigger: boolean }
> = ({ materials, resetTrigger, setCalculatedMaterials }) => {
  const [ownedQuantities, setOwnedQuantities] = useState<{
    [key: string]: number
  }>(Object.keys(materials).reduce((acc, key) => ({ ...acc, [key]: 0 }), {}))
  const [savedResults, setSavedResults] = useState<
    Array<{
      name: string
      results: { [key: string]: number }
      ownedQuantities: { [key: string]: number }
    }>
  >([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSaveName, setCurrentSaveName] = useState('')

  useEffect(() => {
    setOwnedQuantities(
      Object.keys(materials).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
    )
  }, [resetTrigger, materials])

  const handleQuantityChange = (materialName: string, delta: number) => {
    setOwnedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [materialName]: Math.max(0, (prevQuantities[materialName] || 0) + delta),
    }))
  }

  const handleInputChange = (materialName: string, value: string) => {
    const numericValue = parseInt(value, 10)
    if (!isNaN(numericValue)) {
      setOwnedQuantities((prevQuantities) => ({
        ...prevQuantities,
        [materialName]: numericValue,
      }))
    }
  }

  const getDropInfo = (materialName: string) => {
    const material = materialsDrops.find(
      (item) => item.materialName === materialName
    )
    return material ? material.drop.join(', ') : 'SORRY!THERE IS NO DATA...'
  }

  const handleReset = () => {
    setOwnedQuantities(
      Object.keys(materials).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
    )
    setCurrentSaveName('') // Clear the current save name on reset
  }

  const openSaveModal = () => {
    setIsModalOpen(true)
  }

  const closeSaveModal = () => {
    setIsModalOpen(false)
  }

  const saveResults = (name: string) => {
    setSavedResults((prevResults) => {
      const newResults = [
        ...prevResults,
        { name, results: materials, ownedQuantities: { ...ownedQuantities } },
      ]

      if (newResults.length > 5) {
        newResults.shift()
      }

      return newResults
    })
    setCurrentSaveName(name) // Set the current save name after saving
    closeSaveModal()
  }

  const deleteResult = (index: number) => {
    setSavedResults((prevResults) => prevResults.filter((_, i) => i !== index))
  }

  const restoreResult = (index: number) => {
    const resultToRestore = savedResults[index]
    setOwnedQuantities(resultToRestore.ownedQuantities)
    setCalculatedMaterials(resultToRestore.results)
    setCurrentSaveName(resultToRestore.name) // Set the current save name when restoring
  }

  return (
    <>
      <CalculatedSection id="result">
        {Object.keys(materials).length > 0 ? (
          <ResultSection>
            <h2 className="toppan">4.結果はこちら</h2>

            <div className="d-flex justify-content-center gap-3">
              <button
                className="result-save vdl-shadow mb-4 lh-18"
                onClick={openSaveModal}
              >
                SAVE
              </button>
              <button
                className="reset-btn vdl-shadow mb-4"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>

            {currentSaveName && (
              <h3 className="saved-name mb-2 toppan">
                保存名: {currentSaveName}
              </h3>
            )}

            <ul className="result-list">
              {Object.entries(materials).map(([materialName, quantity]) => (
                <li
                  key={materialName}
                  className="toppan py-2 py-md-3 px-2 px-md-4"
                >
                  <div className="result-border mb-3">
                    <div className="material-name position-relative">
                      <p className="mb-0">{materialName}</p>
                      <div className="material-drop dnp-normal">
                        {getDropInfo(materialName)}
                      </div>
                    </div>
                    <div className="quantity-flame">
                      <span className="quantity">{quantity}</span>
                    </div>
                    {ownedQuantities[materialName] >= quantity && (
                      <div className="ok">
                        <Image src={IconOk} alt="" className="w-100 h-100" />
                      </div>
                    )}
                  </div>
                  <div className="toppan input-number">
                    今持ってる数
                    <div>
                      <div className="input-area">
                        <button
                          className="down"
                          onClick={() => handleQuantityChange(materialName, -1)}
                        >
                          −
                        </button>
                        <input
                          type="text"
                          className="p-2"
                          value={ownedQuantities[materialName]}
                          onChange={(e) =>
                            handleInputChange(materialName, e.target.value)
                          }
                        />
                        <button
                          className="up"
                          onClick={() => handleQuantityChange(materialName, 1)}
                        >
                          ＋
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-center gap-3">
              <button
                className="result-save vdl-shadow mb-4 lh-18"
                onClick={openSaveModal}
              >
                SAVE
              </button>
              <button
                className="reset-btn vdl-shadow mb-4"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
          </ResultSection>
        ) : (
          <p className="toppan text-center mb-0">
            ここに必要素材数が表示されます
          </p>
        )}
      </CalculatedSection>

      <SaveModal
        isOpen={isModalOpen}
        onClose={closeSaveModal}
        onSave={saveResults}
        currentSaveName={currentSaveName} // Pass the current save name
      />

      <SavedDataSection
        savedResults={savedResults}
        onDelete={deleteResult}
        onRestore={restoreResult}
      />
    </>
  )
}

const CalculatedSection = styled.div`
  margin-top: 30px;
  padding: 20px 0 0;
  border-top: 2px solid #f6dd94;
  .material-name {
    cursor: help;
    .material-drop {
      display: none;
      position: absolute;
      top: 50px;
      width: 250px;
      height: auto;
      background-color: #fff;
      color: #333;
      padding: 10px;
      z-index: 10;
    }
    &:hover {
      .material-drop {
        display: block;
      }
    }
  }
  @media screen and (min-width: 576px) {
    padding: 30px 0 0;
    border-top: 3px solid #f6dd94;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0 0;
  }
`

const ResultSection = styled.div`
  h2 {
    margin-bottom: 30px;
    color: #a77d00;
    text-align: center;
  }

  .reset-btn,
  .result-save {
    position: relative;
    background-color: #fff;
    border: 2px solid #d29204;
    color: #d29204;
    font-size: 14px;
    border-radius: 50px;
    padding: 5px 20px;
    box-shadow: 2px 2px 0 0 #d29204;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(2px, 2px);
      border: 2px solid #d29204;
      box-shadow: none;
    }
  }

  /* .result-save {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: fit-content;
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
  } */

  .saved-name {
    text-align: center;
    font-size: 16px;
    color: #333;
  }

  .result-list {
    list-style-type: none;
    margin-bottom: 30px;
    padding: 0;
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #d29204;
    padding: 10px;
    li {
      position: relative;
      margin-bottom: 20px;
      background-color: #fffbe8;
      color: #a77d00;
      border-radius: 6px;
      font-size: 14px;
      .result-border {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 2px solid #a77d00;
        p {
          margin: 0 20px 0 0;
        }
        span {
          position: relative;
        }
        .quantity-flame {
          position: relative;
          z-index: 10;
          width: 35px;
          height: 28px;
          &::before,
          &::after {
            content: '';
            position: absolute;
            display: block;
            background-color: #a77d00;
            z-index: -1;
          }
          &::before {
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 100%;
            padding: 0 15px;
            border-radius: 5px;
          }
          &::after {
            top: 50%;
            right: 34px;
            transform: translateY(-50%);
            width: 17px;
            height: 12px;
            clip-path: polygon(100% 0, 60% 50%, 100% 100%);
          }
          .quantity {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            color: #fff;
          }
        }
        .ok {
          position: absolute;
          right: 6%;
          width: 30px;
          height: 30px;
        }
      }
      .input-number {
        position: relative;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 10px 0;
        color: #6f6f6f;
        input {
          width: 50px;
          margin: 0 10px;
        }
        .input-area {
          display: flex;
          align-items: center;
          margin-left: 10px;
          .up,
          .down {
            display: flex;
            justify-content: center;
            background-color: #fff;
            border: 2px solid #a77d00;
            align-items: center;
            width: 22px;
            height: 22px;
            border-radius: 6px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .reset-btn,
    .result-save {
      font-size: 16px;
    }
    .saved-name {
      font-size: 20px;
    }
    .result-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &::after {
        content: '';
        display: block;
        width: 48%;
      }
      li {
        width: 48%;
        font-size: 16px;
        .input-number .ok {
          top: -70%;
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    .result-list::after {
      width: 31%;
    }
  }

  @media screen and (min-width: 1400px) {
    .result-list {
      li {
        width: 31%;
      }
    }
  }
`

export default WeaponCalculateResult
