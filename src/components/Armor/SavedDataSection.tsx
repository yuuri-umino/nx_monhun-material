import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface SavedDataSectionProps {
  savedResults: Array<{
    name: string
    results: { [key: string]: number }
    ownedQuantities: { [key: string]: number }
  }>
  onDelete: (index: number) => void
  onRestore: (index: number) => void
}

const SavedDataSection: React.FC<SavedDataSectionProps> = ({
  savedResults,
  onDelete,
  onRestore,
}) => {
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
    <Section id="saved">
      <h2 className="toppan">5.保存した計算結果</h2>
      <p className="save-caution">
        ※結果は5件まで保存できます。
        <br />
        5件以上保存すると、古い順から削除されます。
        <br />
        任意で削除もできます。
      </p>
      {savedResults.length === 0 ? (
        <p className="toppan text-center mb-0">ここに結果が表示されます</p>
      ) : (
        <div>
          <Tabs>
            {savedResults.map((result, index) => (
              <Tab
                key={index}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {result.name}
              </Tab>
            ))}
          </Tabs>
          <div className="mt-5">
            <p className="toppan mb-2 save-name">
              {savedResults[activeIndex]?.name}
              <div className="d-flex flex-column flex-md-row justify-content-end">
                <button
                  className="delete-savedata me-md-2 mb-2 mb-md-0"
                  onClick={() => handleDelete(activeIndex)}
                >
                  DELETE
                </button>
                <button
                  className="restore-savedata"
                  onClick={() => handleRestore(activeIndex)}
                >
                  RESTORE
                </button>
              </div>
            </p>
            <ul className="d-flex flex-column">
              {Object.entries(savedResults[activeIndex]?.results || {}).map(
                ([materialName, quantity]) => (
                  <li className="mb-1" key={materialName}>
                    <span className="material-name toppan m-0">
                      {materialName}
                    </span>
                    <br className="d-block d-md-none" />
                    所持数:{' '}
                    {savedResults[activeIndex]?.ownedQuantities[materialName] ??
                      0}{' '}
                    / 必要個数: {quantity}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </Section>
  )
}

const Section = styled.section`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #f6874f;
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
  ul {
    margin: 0;
    padding: 0;
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #f6874f;
    padding: 10px;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      background-color: #fff3ed;
      padding: 10px 20px;
      border-radius: 6px;
      color: #6f6f6f;
    }
  }
  .save-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #c8551b;
    .delete-savedata,
    .restore-savedata {
      padding: 0 10px;
      border: 1px solid #c8551b;
      border-radius: 20px;
      background-color: #fff;
      color: #c8551b;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .material-name {
    display: inline-block;
    background-color: #fff;
    color: #6f6f6f;
    padding: 2px 10px;
    border-radius: 6px;
    margin-bottom: 5px;
    margin-right: 10px;
  }
  @media screen and (min-width: 576px) {
    padding-top: 30px;
    border-top: 3px solid #f6874f;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-top: 40px;
    ul {
      li {
        margin-bottom: 20px;
        padding: 10px 20px;
        width: 100%;
      }
    }
  }
`

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 10px;
`

const Tab = styled.button<{ active: boolean }>`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-bottom: 2px solid #c8551b;
  background: ${(props) => (props.active ? '#C8551B' : 'none')};
  color: ${(props) => (props.active ? '#fff' : '#C8551B')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  font-size: ${(props) => (props.active ? '16px' : '12px')};
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export default SavedDataSection
