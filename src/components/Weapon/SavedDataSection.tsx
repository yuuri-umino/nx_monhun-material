import React, { useState } from 'react'
import styled from 'styled-components'

interface SavedDataSectionProps {
  savedResults: Array<{
    name: string
    results: { [key: string]: number }
    ownedQuantities: { [key: string]: number }
  }>
  onDelete: (index: number) => void
}

const SavedDataSection: React.FC<SavedDataSectionProps> = ({
  savedResults,
  onDelete,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Section>
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
              {savedResults[activeIndex].name}
              <button
                className="delete-savedata"
                onClick={() => onDelete(activeIndex)}
              >
                DELETE
              </button>
            </p>
            <ul className="d-flex flex-column">
              {Object.entries(savedResults[activeIndex].results).map(
                ([materialName, quantity]) => (
                  <li className="mb-1" key={materialName}>
                    <span className="material-name toppan m-0">
                      {materialName}
                    </span>
                    <br className="d-block d-md-none" />
                    所持数:{' '}
                    {savedResults[activeIndex].ownedQuantities[materialName]} /
                    必要個数: {quantity}
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
  border-top: 2px solid #f6dd94;
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
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      background-color: #fffbe8;
      padding: 10px 20px;
      border-radius: 6px;
      color: #6f6f6f;
    }
  }
  .save-name {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #a77d00;
    .delete-savedata {
      padding: 0 10px;
      border: 1px solid #a77d00;
      border-radius: 20px;
      background-color: #fff;
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
    border-top: 3px solid #f6dd94;
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
  border-bottom: 2px solid #a77d00;
  background: ${(props) => (props.active ? '#a77d00' : 'none')};
  color: ${(props) => (props.active ? '#fff' : '#a77d00')};
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
