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
      <ul className="d-flex flex-column flex-md-row">
        {savedResults.map((result, index) => (
          <li key={index}>
            <p className="vdl-shadow mb-1">{result.name}</p>
            <ul className="d-flex flex-column">
              {Object.entries(result.results).map(
                ([materialName, quantity]) => (
                  <li className="mb-1" key={materialName}>
                    {materialName}: [自分が今持っている個数:{' '}
                    {result.ownedQuantities[materialName]} / 必要個数:{' '}
                    {quantity}]
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
      margin-bottom: 10px;
      p {
        color: #a77d00;
      }
      ul {
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
      justify-content: space-between;
      &::after {
        content: '';
        display: block;
        width: 31%;
      }
      li {
        margin-bottom: 10px;
        width: 31%;
        background-color: #fffbe8;
        padding: 10px;
        border-radius: 6px;
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
