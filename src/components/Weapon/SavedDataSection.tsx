import React from 'react'
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
        <ul>
          {savedResults.map((result, index) => (
            <li key={index}>
              <p className="toppan mb-1 save-name">
                {result.name}
                <button
                  className="delete-savedata"
                  onClick={() => onDelete(index)}
                >
                  DELETE
                </button>
              </p>
              <ul className="d-flex flex-column">
                {Object.entries(result.results).map(
                  ([materialName, quantity]) => (
                    <li className="mb-1" key={materialName}>
                      <span className="material-name toppan">
                        {materialName}
                      </span>
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
      )}
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
  .save-caution {
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    .save-name {
      position: relative;
      font-size: 20px;
      .delete-savedata {
        position: absolute;
        top: -35%;
        right: -5%;
        padding: 0 10px;
        border: 1px solid #a77d00;
        border-radius: 20px;
        background-color: #fff;
        font-size: 14px;
        font-weight: bold;
        z-index: 10;
      }
    }
    li {
      position: relative;
      margin-bottom: 10px;
      background-color: #fffbe8;
      padding: 10px 20px;
      border-radius: 6px;
      p {
        color: #a77d00;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          color: #6f6f6f;
          padding: 0;
          .material-name {
            display: inline-block;
            background-color: #fff;
            padding: 2px 10px;
            border-radius: 6px;
            margin-bottom: 5px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  padding-top: 20px;
  border-top: 2px solid #f6dd94;
  @media screen and (min-width: 576px) {
    padding-top: 30px;
    border-top: 3px solid #f6dd94;
    ul {
      .save-name {
        .delete-savedata {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding-top: 40px;
    ul {
      li {
        margin-bottom: 20px;
        padding: 10px 20px;
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
