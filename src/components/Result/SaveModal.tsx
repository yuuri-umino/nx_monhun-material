import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface SaveModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (name: string) => void
  currentSaveName: string
}

const SaveModal: React.FC<SaveModalProps> = ({
  isOpen,
  onClose,
  onSave,
  currentSaveName,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (currentSaveName) {
      setInputValue(currentSaveName)
    }
  }, [currentSaveName])

  const handleSave = () => {
    // 次のセクションにジャンプ
    const selectWeaponSection = document.getElementById('saved')
    if (selectWeaponSection) {
      selectWeaponSection.scrollIntoView({ behavior: 'smooth' })
    }
    if (inputValue.trim()) {
      onSave(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave()
    }
  }

  return (
    <ModalOverlay $isOpen={isOpen}>
      <ModalContent className={isWeaponPage ? 'weapon' : 'armor'}>
        <h2 className="toppan">名前を入力してください</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ANY NAME"
        />
        <div className="datasave-btn toppan">
          <button className="save" onClick={handleSave}>
            SAVE
          </button>
          <button className="cancel" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: calc(100% - 20px);
  text-align: center;
  &.weapon {
    h2,
    button {
      color: #a77d00;
    }
    input {
      border: 1px solid #d29204;
    }
    button {
      border: 2px solid #d29204;
    }
  }
  &.armor {
    h2,
    button {
      color: #c8551b;
    }
    input {
      border: 1px solid #c8551b;
    }
    button {
      border: 2px solid #c8551b;
    }
  }
  input {
    width: 300px;
  }
  .datasave-btn {
    gap: 10px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  button {
    background-color: #fff;
  }
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export default SaveModal
