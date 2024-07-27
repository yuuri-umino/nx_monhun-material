import React, { useState } from 'react'
import styled from 'styled-components'

import { Weapon } from '../../utils/materialsTypes'
interface SelectProps {
  weapons: Weapon[]
}

const WeaponSelectSection: React.FC<SelectProps> = ({ weapons }) => {
  return (
    <SelectSection>
      <div className="section-border">
        <div className="weapon-name d-flex flex-wrap justify-content-between align-items-center">
          {weapons.map((weapon, index) => (
            <button
              key={index}
              className="vdl-shadow weapon-item d-flex align-items-center my-2 py-1 px-2 px-md-4"
              type="button"
            >
              <div className="checkbox-container">
                <input type="checkbox" className="weapon-checkbox" readOnly />
              </div>
              <p className="toppan mb-0 ms-1 ms-lg-4">{weapon.name}</p>
            </button>
          ))}
        </div>
      </div>
    </SelectSection>
  )
}
const SelectSection = styled.div`
  margin-inline: auto;
  .section-border {
    padding: 20px 0;
    border-bottom: 2px solid #f6dd94;
  }
  .weapon-name {
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
    cursor: pointer;
    p {
      font-size: 14px;
    }
    .weapon-icon {
      width: 25px;
      height: auto;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  .weapon-checkbox {
    position: relative;
    width: 1rem;
    height: 1rem;
    appearance: none;
    &::before {
      background: transparent;
      border: 2px solid #d2a10e;
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
      border-right: 3px solid #81630a;
      border-bottom: 3px solid #81630a;
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
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 3px solid #f6dd94;
    }
    .weapon-name {
      &::after {
        width: 47%;
      }
    }
    .weapon-item {
      width: 47%;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      padding: 40px 0;
    }
  }
  @media screen and (min-width: 992px) {
    .weapon-item {
      p {
        font-size: 16px;
      }
    }
  }
`

export default WeaponSelectSection
