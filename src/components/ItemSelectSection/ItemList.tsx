import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Armor } from '../../utils/armor/materialsTypes'
import { Weapon } from '../../utils/weapon/materialsTypes'

interface ItemListProps {
  armors?: Armor[]
  weapons?: Weapon[]
  selectedItems: Set<string>
  handleCheckboxChange: (itemName: string) => void
}

const ItemList: React.FC<ItemListProps> = ({
  armors,
  weapons,
  selectedItems,
  handleCheckboxChange,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <ItemSelectArea className={isWeaponPage ? 'weapon' : 'armor'}>
      {isWeaponPage && weapons
        ? weapons.map((weapon, index) => (
            <button
              key={index}
              className={`vdl-shadow item my-2 py-1 px-2 px-md-4 ${
                selectedItems.has(weapon.name) ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleCheckboxChange(weapon.name)}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedItems.has(weapon.name)}
                  readOnly
                />
              </div>
              <p className="toppan mb-0 ms-1 ms-lg-4">{weapon.name}</p>
            </button>
          ))
        : armors?.map((armor, index) => (
            <button
              key={index}
              className={`vdl-shadow item my-2 py-1 px-2 px-md-4 ${
                selectedItems.has(armor.name) ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleCheckboxChange(armor.name)}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedItems.has(armor.name)}
                  readOnly
                />
              </div>
              <p className="toppan mb-0 ms-1 ms-lg-4">{armor.name}</p>
            </button>
          ))}
    </ItemSelectArea>
  )
}

const ItemSelectArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-height: 400px;
  overflow-y: scroll;
  padding: 10px;
  .item {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    p {
      font-size: 14px;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    .checkbox {
      position: relative;
      width: 1rem;
      height: 1rem;
      appearance: none;
      &::before {
        background: #fff;
        border-radius: 3px;
        content: '';
        display: block;
        height: 16px;
        left: 5px;
        margin-top: -8px;
        position: absolute;
        top: 50%;
        width: 16px;
      }
      &::after {
        content: '';
        display: block;
        height: 11px;
        left: 10px;
        margin-top: -7px;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: rotate(45deg);
        width: 6px;
      }
      &:checked::after {
        opacity: 1;
      }
    }
  }
  &.weapon {
    border: 1px solid #d29204;
    .item {
      background-color: #fff9db;
      color: #a77d00;
      p {
        font-size: 14px;
      }
      &:hover {
        background-color: #fee66c;
      }
      &.selected {
        background-color: #fee66c;
      }
    }
    .checkbox {
      &::before {
        border: 2px solid #d2a10e;
      }
      &::after {
        border-right: 2px solid #81630a;
        border-bottom: 2px solid #81630a;
      }
    }
  }
  &.armor {
    border: 1px solid #f6874f;
    .item {
      background-color: #fff3ed;
      color: #c8551b;
      p {
        font-size: 14px;
      }
      &:hover {
        background-color: #ffd1ba;
      }
      &.selected {
        background-color: #ffd1ba;
      }
    }
    .checkbox {
      &::before {
        border: 2px solid #f6874f;
      }
      &::after {
        border-right: 2px solid #f6874f;
        border-bottom: 2px solid #f6874f;
      }
    }
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 576px) {
    &::after {
      width: 47%;
    }
    &.weapon,
    &.armor {
      .item {
        width: 47%;
      }
    }
  }
  @media screen and (min-width: 992px) {
    &.weapon,
    &.armor {
      .item {
        p {
          font-size: 16px;
        }
      }
    }
  }
`

export default ItemList
