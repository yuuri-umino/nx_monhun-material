import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface InputQuantityProps {
  materialName: string
  quantity: number
  handleQuantityChange: (materialName: string, delta: number) => void
  handleInputChange: (materialName: string, value: string) => void
}

const InputQuantity: React.FC<InputQuantityProps> = ({
  materialName,
  quantity,
  handleQuantityChange,
  handleInputChange,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <QuantityContainer className={isWeaponPage ? 'weapon' : 'armor'}>
      <div className="input-area">
        <button
          className="down"
          onClick={() => handleQuantityChange(materialName, -1)}
        >
          −
        </button>
        <input
          type="text"
          className="p-1"
          value={quantity}
          onChange={(e) => handleInputChange(materialName, e.target.value)}
        />
        <button
          className="up"
          onClick={() => handleQuantityChange(materialName, 1)}
        >
          ＋
        </button>
      </div>
    </QuantityContainer>
  )
}

const QuantityContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  color: #6f6f6f;
  &.weapon {
    .input-area {
      input {
        border: 1px solid #a77d00;
        border-radius: 5px;
      }
      .up,
      .down {
        color: #a77d00;
        border: 2px solid #a77d00;
      }
    }
  }
  &.armor {
    .input-area {
      input {
        border: 1px solid #c8551b;
        border-radius: 5px;
      }
      .up,
      .down {
        color: #c8551b;
        border: 2px solid #c8551b;
      }
    }
  }
  input {
    color: #444;
    width: 50px;
    margin: 0 5px;
  }
  .input-area {
    display: flex;
    align-items: center;
    margin-left: 10px;
    .up,
    .down {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 22px;
      height: 22px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`

export default InputQuantity
