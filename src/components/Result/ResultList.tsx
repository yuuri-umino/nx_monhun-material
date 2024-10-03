import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import ResultItemName from './ResultItemName'
import InputQuantity from './InputQuantity'

interface ResultListProps {
  materials: { [key: string]: number }
  ownedQuantities: { [key: string]: number }
  handleQuantityChange: (materialName: string, delta: number) => void
  handleInputChange: (materialName: string, value: string) => void
  getDropInfo: (materialName: string) => string
}

const ResultList: React.FC<ResultListProps> = ({
  materials,
  ownedQuantities,
  handleQuantityChange,
  handleInputChange,
  getDropInfo,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <List className={isWeaponPage ? 'weapon' : 'armor'}>
      {Object.entries(materials).map(([materialName, quantity]) => (
        <li key={materialName} className="toppan py-2 py-md-3 px-2">
          <ResultItemName
            materialName={materialName}
            quantity={quantity}
            getDropInfo={getDropInfo}
          />

          <InputQuantity
            materialName={materialName}
            quantity={ownedQuantities[materialName]}
            handleQuantityChange={handleQuantityChange}
            handleInputChange={handleInputChange}
          />
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
  padding: 0;
  max-height: 400px;
  overflow-y: scroll;
  padding: 10px;
  li {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 6px;
    font-size: 14px;
  }
  &.weapon {
    border: 1px solid #a77d00;
    li {
      background-color: #fffbe8;
      color: #a77d00;
    }
  }
  &.armor {
    border: 1px solid #f6874f;
    li {
      background-color: #fff3ed;
      color: #c8551b;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &::after {
      content: '';
      display: block;
      width: 48%;
    }
    li {
      width: 48%;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 992px) {
    &::after {
      width: 31%;
    }
  }
  @media screen and (min-width: 1400px) {
    li {
      width: 31%;
    }
  }
`

export default ResultList
