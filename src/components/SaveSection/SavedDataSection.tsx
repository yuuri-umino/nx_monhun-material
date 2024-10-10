import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import SaveTabs from './SaveTabs'
import SaveListItem from './SaveListItem'
import DeleteRestoreBtn from './DeleteRestoreBtn'

interface SavedDataSectionProps {
  savedResults: Array<{
    name: string
    results: { [key: string]: number }
    ownedQuantities: { [key: string]: number }
  }>
  onDelete: (index: number) => void
  onRestore: (index: number) => void
  selectedArmorNames: string[] // 計算後の防具名リスト
}

const SavedDataSection: React.FC<SavedDataSectionProps> = ({
  savedResults,
  onDelete,
  onRestore,
  selectedArmorNames,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (activeIndex >= savedResults.length) {
      setActiveIndex(0)
    }
  }, [savedResults.length, activeIndex])

  useEffect(() => {
    if (savedResults.length === 0) {
      setActiveIndex(0)
    }
  }, [savedResults.length])

  const handleDelete = (index: number) => {
    onDelete(index)
    if (index === activeIndex && savedResults.length > 1) {
      setActiveIndex(0)
    } else if (index < activeIndex) {
      setActiveIndex((prev) => prev - 1)
    }
  }

  const handleRestore = (index: number) => {
    onRestore(index)
    // スクロール処理を追加
    const resultSection = document.getElementById('result')
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="saved" className={isWeaponPage ? 'weapon' : 'armor'}>
      <h2 className="toppan">5.保存した計算結果</h2>
      <p className="save-caution">
        ※結果は5件まで保存できます。
        <br />
        ※5件以上保存すると、古い順から削除されます。
        <br />
        ※任意で削除もできます。
        <br />
        ※保存した結果はRESTOREで再度利用することができます。
        <br />
        ※個数が反映されない場合はもう一度RESTOREを押してみてください。
      </p>

      {savedResults.length === 0 ? (
        <p className="toppan text-center mb-0">ここに結果が表示されます</p>
      ) : (
        <>
          <SaveTabs
            savedResults={savedResults}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isWeaponPage={isWeaponPage}
          />

          <div className="mt-5">
            <div className="toppan mb-2 save-name">
              <p className="save-list-name mb-0">
                保存名【 {savedResults[activeIndex]?.name}】
              </p>

              <DeleteRestoreBtn
                onDelete={() => handleDelete(activeIndex)}
                onRestore={() => handleRestore(activeIndex)}
                isWeaponPage={isWeaponPage}
              />
            </div>

            <div
              className={`select-armors-name mb-2 ${isWeaponPage ? 'weapon' : 'armor'}`}
            >
              <ul>
                {selectedArmorNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>

            <ul>
              {Object.entries(savedResults[activeIndex]?.results || {}).map(
                ([materialName, quantity]) => (
                  <SaveListItem
                    key={materialName}
                    materialName={materialName}
                    quantity={quantity}
                    ownedQuantity={
                      savedResults[activeIndex]?.ownedQuantities[
                        materialName
                      ] ?? 0
                    }
                    isWeaponPage={isWeaponPage}
                  />
                )
              )}
            </ul>
          </div>
        </>
      )}
    </Section>
  )
}

const Section = styled.section`
  margin-top: 20px;
  padding-top: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &.weapon {
    border-top: 2px solid #f6dd94;
    ul {
      border: 1px solid #d29204;
    }
    .save-list-name {
      color: #a77d00;
    }
  }
  &.armor {
    border-top: 2px solid #f6874f;
    ul {
      border: 1px solid #c8551b;
    }
    .save-list-name {
      color: #c8551b;
    }
  }
  h2 {
    margin-bottom: 30px;
    text-align: center;
  }
  .save-caution {
    font-size: 12px;
    text-align: left;
    line-height: 1.6;
  }
  ul {
    margin: 0;
    padding: 0;
    max-height: 400px;
    overflow-y: scroll;
    padding: 10px;
    list-style: none;
  }
  .save-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    .delete-savedata,
    .restore-savedata {
      padding: 0 10px;
      border-radius: 20px;
      background-color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .select-armors-name {
    p {
      color: #c8551b;
    }
    ul {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      border: none;
      overflow-y: inherit;
      li {
        list-style-type: none;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 5px 10px;
        border-radius: 6px;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
      }
    }
    &.weapon ul li {
      background: #a77d00;
    }
    &.armor ul li {
      background: #c8551b;
    }
  }
  @media screen and (min-width: 576px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-top: 40px;
    .save-caution {
      text-align: center;
    }
    .save-name {
      flex-direction: row;
    }
    ul {
      li {
        margin-bottom: 20px;
        padding: 10px 20px;
      }
    }
    .select-armors-name {
      ul {
        li {
          font-size: 14px;
        }
      }
    }
  }
`

export default SavedDataSection
