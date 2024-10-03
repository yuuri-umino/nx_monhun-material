import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface ResultItemNameProps {
  materialName: string
  quantity: number
  getDropInfo: (materialName: string) => string
}

const ResultItemName: React.FC<ResultItemNameProps> = ({
  materialName,
  quantity,
  getDropInfo,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <ResultNameArea>
      <div className="position-relative">
        <p className="mb-0">{materialName}</p>
        <div className="material-drop dnp-normal">
          {getDropInfo(materialName)}
        </div>
      </div>

      <div className={`quantity-area ${isWeaponPage ? 'weapon' : 'armor'}`}>
        <span className="quantity">{quantity}</span>
      </div>
    </ResultNameArea>
  )
}

const ResultNameArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  p {
    margin: 0 10px 0 0;
    font-size: 14px;
    cursor: help;
  }
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
  .quantity-area {
    position: relative;
    z-index: 10;
    width: 35px;
    height: 28px;
    padding: 0 15px;
    border-radius: 5px;
    &.weapon {
      background-color: #a77d00;
      &::after {
        background-color: #a77d00;
      }
    }
    &.armor {
      background-color: #c8551b;
      &::after {
        background-color: #c8551b;
      }
    }
    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
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
  @media screen and (min-width: 768px) {
    p {
      font-size: 16px;
    }
    .material-drop {
      top: 30px;
    }
  }
`

export default ResultItemName
