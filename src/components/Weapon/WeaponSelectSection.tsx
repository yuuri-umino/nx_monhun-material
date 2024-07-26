import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconWeapon from '../../assets/icon-weapon.png'

import { Weapon } from '../../utils/materialsTypes'
interface SelectProps {
  Weapons: Weapon[]
}

const DerivatedCategory: React.FC<SelectProps> = ({ Weapons }) => {
  return (
    <>
      <SelectSection>
        <div className="section-border">
          <div className="weapon-list d-flex flex-wrap justify-content-between align-items-center">
            <button
              className="vdl-shadow weapon-item d-flex align-items-center my-2 py-1 px-2"
              type="button"
            >
              <p className="mb-0 ms-1 ms-lg-2">武器名</p>
            </button>
          </div>
        </div>
      </SelectSection>
    </>
  )
}

const SelectSection = styled.div`
  margin-inline: auto;
  .section-border {
    padding: 20px 0;
    border-bottom: 2px solid #f6dd94;
  }
  .weapon-list {
    &::after {
      content: '';
      display: block;
      width: 100%;
    }
  }
  .weapon-item {
    background-color: #fff9db;
    border: none;
    border-radius: 6px;
    color: #a77d00;
    width: 100%;
    p {
      font-size: 14px;
    }
    .weapon-icon {
      width: 25px;
      height: auto;
    }
  }
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 3px solid #f6dd94;
    }
    .weapon-list {
      &::after {
        width: 45%;
      }
    }
    .weapon-item {
      width: 45%;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      padding: 40px 0;
    }
  }
  @media screen and (min-width: 992px) {
    .weapon-list {
      &::after {
        width: 30%;
      }
    }
    .weapon-item {
      width: 30%;
      p {
        font-size: 16px;
      }
    }
  }
`

export default DerivatedCategory
