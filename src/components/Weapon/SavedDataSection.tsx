import React from 'react'
import styled from 'styled-components'

interface SavedDataSectionProps {
  savedResults: Array<{
    name: string
    results: { [key: string]: number }
    ownedQuantities: { [key: string]: number }
  }>
}

const SavedDataSection: React.FC<SavedDataSectionProps> = ({
  savedResults,
}) => {
  return (
    <Section>
      <h2 className="toppan">保存した計算結果</h2>
      <ul>
        {savedResults.map((result, index) => (
          <li key={index}>
            <button className="delete-savedata">DELETE</button>
            <p className="vdl-shadow mb-1">{result.name}</p>
            <ul className="d-flex flex-column">
              {Object.entries(result.results).map(
                ([materialName, quantity]) => (
                  <li className="mb-1" key={materialName}>
                    <span className="toppan">{materialName}</span>　
                    <br className="d-block d-md-none" />
                    所持数: {result.ownedQuantities[materialName]} / 必要個数:{' '}
                    {quantity}
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 20px;
  h2 {
    margin-bottom: 30px;
    color: #a77d00;
    text-align: center;
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
      .delete-savedata {
        position: absolute;
        top: 6%;
        right: 4%;
        padding: 0 10px;
        border: 1px solid #a77d00;
        border-radius: 20px;
        background-color: #fff;
        font-size: 14px;
        font-weight: bold;
        z-index: 10;
      }
      p {
        color: #a77d00;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          color: #6f6f6f;
        }
      }
    }
  }
  padding-top: 20px;
  border-top: 2px solid #f6dd94;
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
        .delete-savedata {
          top: 10%;
          right: 2%;
        }
        ul {
          li {
            width: 100%;
            padding: 0;
          }
        }
      }
    }
  }
`

export default SavedDataSection
