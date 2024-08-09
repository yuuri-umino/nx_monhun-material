import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
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

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
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
    color: #c8551b;
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
  input {
    width: 300px;
    border: 1px solid #f6874f;
  }
  .datasave-btn {
    gap: 10px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  button {
    background-color: #fff;
    border: 2px solid #f6874f;
    color: #c8551b;
  }
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export default SaveModal
