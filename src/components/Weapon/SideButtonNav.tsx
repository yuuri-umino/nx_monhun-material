// components/SideButtonNav.tsx
import React from 'react'
import styled from 'styled-components'

const SideButtonNav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <NavContainer className="toppan">
      <NavButton onClick={() => scrollToSection('how-to-use')}>？</NavButton>
      <NavButton onClick={() => scrollToSection('category')}>武器種</NavButton>
      <NavButton onClick={() => scrollToSection('derivated')}>派生</NavButton>
      <NavButton onClick={() => scrollToSection('select-weapon')}>
        武器
      </NavButton>
      <NavButton onClick={() => scrollToSection('result')}>結果</NavButton>
      <NavButton onClick={() => scrollToSection('saved')}>保存</NavButton>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  @media screen and (max-width: 576px) {
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 5px;
  }
`

const NavButton = styled.button`
  background-color: #a77d00;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #8f6b00;
  }

  @media screen and (max-width: 576px) {
    padding: 5px 8px;
  }
`

export default SideButtonNav
