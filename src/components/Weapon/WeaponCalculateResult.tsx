import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { materialsDrops } from '../../utils/materialsDrops'
import SaveModal from '../Result/SaveModal'
import SavedDataSection from '../Result/SavedDataSection'
import SaveResetBtn from '../Result/SaveResetBtn'
import ResultList from '../Result/ResultList'

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
    setCurrentSaveName('')
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
    setCurrentSaveName(name)
    closeSaveModal()
  }

  const deleteResult = (index: number) => {
    setSavedResults((prevResults) => prevResults.filter((_, i) => i !== index))
  }

  const restoreResult = (index: number) => {
    const resultToRestore = savedResults[index]
    setOwnedQuantities(resultToRestore.ownedQuantities)
    setCalculatedMaterials(resultToRestore.results)
    setCurrentSaveName(resultToRestore.name)
  }

  return (
    <>
      <CalculatedSection id="result">
        {Object.keys(materials).length > 0 ? (
          <ResultSection>
            <h2 className="toppan">4.結果はこちら</h2>

            <SaveResetBtn onSave={openSaveModal} onReset={handleReset} />

            <p className="save-caution">
              <span className="d-none d-md-block">
                素材名にマウスホバーすると
              </span>
              <span className="d-block d-md-none">素材名をクリックすると</span>
              入手先が表示されます。
            </p>

            {currentSaveName && (
              <h3 className="saved-name mb-2 toppan">
                保存名: {currentSaveName}
              </h3>
            )}

            <ResultList
              materials={materials}
              ownedQuantities={ownedQuantities}
              handleQuantityChange={handleQuantityChange}
              handleInputChange={handleInputChange}
              getDropInfo={getDropInfo}
            />

            <SaveResetBtn onSave={openSaveModal} onReset={handleReset} />
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
        currentSaveName={currentSaveName}
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
  @media screen and (min-width: 576px) {
    padding: 30px 0 0;
    border-top: 2px solid #f6dd94;
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
  .save-caution {
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
  }
  .saved-name {
    text-align: center;
    font-size: 16px;
    color: #333;
  }

  @media screen and (min-width: 768px) {
    .saved-name {
      font-size: 20px;
    }
  }
`

export default WeaponCalculateResult
