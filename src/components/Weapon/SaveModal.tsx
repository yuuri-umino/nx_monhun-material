import React, { useState } from 'react'
import styled from 'styled-components'

interface SaveModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (name: string) => void
}

const SaveModal: React.FC<SaveModalProps> = ({ isOpen, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSave = () => {
    if (inputValue.trim()) {
      onSave(inputValue)
      setInputValue('')
    }
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <h2 className="toppan">Enter save name</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ANY NAME"
        />
        <div className="datasave-btn toppan">
          <button className="save" onClick={handleSave}>
            save!
          </button>
          <button className="cancel" onClick={onClose}>
            cancel
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
    color: #a77d00;
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
    border: px solid #a77d00;
  }
  .datasave-btn {
    gap: 10px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  button {
    background-color: #fff;
    border: 2px solid #a77d00;
    color: #a77d00;
  }
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export default SaveModal
