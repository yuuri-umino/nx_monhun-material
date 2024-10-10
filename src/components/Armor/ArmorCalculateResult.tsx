import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { materialsDrops } from '../../utils/materialsDrops'
import SaveModal from '../SaveSection/SaveModal'
import SavedDataSection from '../SaveSection/SavedDataSection'
import SaveResetBtn from '../Result/SaveResetBtn'
import ResultList from '../Result/ResultList'

interface CalculateResultProps {
  materials: { [key: string]: number }
  setCalculatedMaterials: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >
  selectedArmorNames: string[] // 計算後の防具名リスト
}

const ArmorCalculateResult: React.FC<
  CalculateResultProps & { resetTrigger: boolean }
> = ({
  materials,
  resetTrigger,
  setCalculatedMaterials,
  selectedArmorNames,
}) => {
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

  // 保存モーダルを開く
  const openSaveModal = () => {
    setIsModalOpen(true)
  }

  // 保存モーダルを閉じる
  const closeSaveModal = () => {
    setIsModalOpen(false)
  }

  // 保存
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

  // 保存した結果を削除
  const deleteResult = (index: number) => {
    setSavedResults((prevResults) => prevResults.filter((_, i) => i !== index))
  }

  // 保存した結果を復元
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

            <div className="select-armors-name mb-2">
              <p className="toppan mb-2">選択した防具</p>
              <ul>
                {selectedArmorNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>

            {currentSaveName && (
              <h3 className="saved-name mb-2 toppan">
                保存名【{currentSaveName}】
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
        selectedArmorNames={selectedArmorNames}
      />
    </>
  )
}

const CalculatedSection = styled.div`
  margin-top: 30px;
  padding: 20px 0 0;
  border-top: 2px solid #f6874f;
  @media screen and (min-width: 576px) {
    padding: 30px 0 0;
    border-top: 2px solid #f6874f;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0 0;
  }
`

const ResultSection = styled.div`
  h2 {
    margin-bottom: 30px;
    color: #c8551b;
    text-align: center;
  }
  .save-caution {
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
  }
  .saved-name {
    font-size: 16px;
    color: #c8551b;
  }
  .select-armors-name {
    p {
      color: #c8551b;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      li {
        list-style-type: none;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 5px 10px;
        color: #fff;
        background: #c8551b;
        border-radius: 6px;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .saved-name {
      font-size: 20px;
    }
    .select-armors-name {
      p {
        font-size: 20px;
      }
      ul {
        li {
          font-size: 14px;
        }
      }
    }
  }
`

export default ArmorCalculateResult
