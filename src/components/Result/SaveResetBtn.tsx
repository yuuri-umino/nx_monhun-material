import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface SaveResetBtnProps {
  onSave: () => void
  onReset: () => void
}

const SaveResetBtn: React.FC<SaveResetBtnProps> = ({ onSave, onReset }) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <ButtonContainer className={isWeaponPage ? 'weapon' : 'armor'}>
      <button className="result-save vdl-shadow mb-4 lh-18" onClick={onSave}>
        SAVE
      </button>
      <button className="reset-btn vdl-shadow mb-4" onClick={onReset}>
        RESET
      </button>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  .result-save,
  .reset-btn {
    position: relative;
    background-color: #fff;
    font-size: 14px;
    border-radius: 50px;
    padding: 5px 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  }
  &.weapon {
    .result-save,
    .reset-btn {
      border: 2px solid #d29204;
      color: #d29204;
      box-shadow: 2px 2px 0 0 #d29204;
      &:hover {
        border: 2px solid #d29204;
      }
    }
  }
  &.armor {
    .result-save,
    .reset-btn {
      border: 2px solid #f6874f;
      color: #f6874f;
      box-shadow: 2px 2px 0 0 #f6874f;
      &:hover {
        border: 2px solid #f6874f;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .result-save,
    .reset-btn {
      font-size: 16px;
    }
  }
`

export default SaveResetBtn
