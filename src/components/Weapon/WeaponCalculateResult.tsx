import React from 'react'
import styled from 'styled-components'

interface CalculateResultProps {
  materials: { [key: string]: number }
}

const WeaponCalculateResult: React.FC<CalculateResultProps> = ({
  materials,
}) => {
  return (
    <>
      <CalculatedSection>
        {Object.keys(materials).length > 0 && (
          <ResultSection>
            <h2 className="toppan">Result</h2>
            <ul>
              {Object.entries(materials).map(([materialName, quantity]) => (
                <li
                  key={materialName}
                  className="toppan py-2 py-md-3 px-2 px-md-4"
                >
                  <div className="result-border mb-3">
                    <p className="mb-0">{materialName}</p>
                    <div className="quantity-flame">
                      <span className="quantity">{quantity}</span>
                    </div>
                  </div>
                  <div className="toppan input-number">
                    今持ってる数
                    <div className="input-area">
                      <button className="down"></button>
                      <input type="text" className="p-2" />
                      <button className="up"></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ResultSection>
        )}
      </CalculatedSection>
    </>
  )
}

const CalculatedSection = styled.div`
  margin-top: 30px;
  padding: 20px 0;
  border-top: 2px solid #f6dd94;
  @media screen and (min-width: 576px) {
    padding: 30px 0;
    border-top: 3px solid #f6dd94;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
`

const ResultSection = styled.div`
  h2 {
    margin-bottom: 30px;
    color: #a77d00;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    li {
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
      }
      .input-number {
        display: flex;
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
            position: relative;
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
          .up::before,
          .down::before {
            content: '';
            display: block;
            position: absolute;
            left: 23%;
            width: 10px;
            height: 10px;
            border-top: 3px solid #a77d00;
            border-left: 3px solid #a77d00;
          }
          .up::before {
            transform: rotate(45deg);
            top: 30%;
          }
          .down::before {
            top: 10%;
            transform: rotate(-135deg);
          }
        }
      }
      @media screen and (min-width: 768px) {
        width: 47%;
        font-size: 16px;
      }
    }
  }
`

export default WeaponCalculateResult
