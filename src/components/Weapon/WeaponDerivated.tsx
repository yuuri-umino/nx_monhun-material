import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconWeapon from '../../assets/icon-weapon.png'

import { Derivation } from '../../utils/weapon/materialsTypes'

interface WeaponDerivatedProps {
  derivations: Derivation[]
  onSelectDerivation: (
    weapons: Derivation['weapons'],
    derivationName: string
  ) => void
}

const DerivatedCategory: React.FC<WeaponDerivatedProps> = ({
  derivations,
  onSelectDerivation,
}) => {
  const [selectedDerivation, setSelectedDerivation] = useState<string | null>(
    null
  )

  const handleSelect = (derivation: Derivation) => {
    setSelectedDerivation(derivation.name)
    onSelectDerivation(derivation.weapons, derivation.name)
    // 次のセクションにジャンプ
    const selectWeaponSection = document.getElementById('select-weapon')
    if (selectWeaponSection) {
      selectWeaponSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <DerivatedSection id="derivated">
      <div className="section-border">
        <h2 className="toppan">2.派生先を選択する</h2>
        <div className="weapon-derivated-list d-flex flex-wrap justify-content-between align-items-center">
          {derivations.map((derivation, index) => (
            <button
              key={index}
              className={`toppan weapon-item d-flex align-items-center my-2 py-1 px-2 ${
                selectedDerivation === derivation.name ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleSelect(derivation)}
            >
              <Image src={IconWeapon} alt="" className="weapon-icon" />
              <p className="mb-0 ms-1 ms-lg-2">{derivation.name}</p>
            </button>
          ))}
        </div>
      </div>
    </DerivatedSection>
  )
}

const DerivatedSection = styled.div`
  margin-inline: auto;
  h2 {
    margin-bottom: 30px;
    color: #a77d00;
    text-align: center;
  }
  .section-border {
    padding: 20px 0;
    border-bottom: 2px solid #f6dd94;
  }
  .weapon-derivated-list {
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #d29204;
    padding: 10px;
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
    transition: all 0.3s ease-in-out;
    p {
      font-size: 14px;
    }
    .weapon-icon {
      width: 25px;
      height: auto;
    }
    &:hover {
      background-color: #fee66c;
    }
    &.selected {
      background-color: #fee66c;
    }
  }
  @media screen and (min-width: 576px) {
    .section-border {
      padding: 30px 0;
      border-bottom: 2px solid #f6dd94;
    }
    .weapon-derivated-list {
      height: auto;
      padding: 0;
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
    .weapon-derivated-list {
      max-height: none;
      overflow-y: auto;
      border: none;
    }
  }
  @media screen and (min-width: 992px) {
    .weapon-derivated-list {
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
