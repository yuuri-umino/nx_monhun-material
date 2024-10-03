// components/SideButtonNav.tsx
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const SideButtonNav: React.FC = () => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <NavContainer
      className={`toppan ${isWeaponPage ? 'weapon-bg' : 'armor-bg'}`}
    >
      <button onClick={() => scrollToSection('how-to-use')}>？</button>
      <button onClick={() => scrollToSection('category')}>
        {isWeaponPage ? '武器種' : 'ランク'}
      </button>
      <button onClick={() => scrollToSection('derivated')}>派生</button>
      <button onClick={() => scrollToSection('select-weapon')}>
        {isWeaponPage ? '武器' : '防具'}
      </button>
      <button onClick={() => scrollToSection('result')}>結果</button>
      <button onClick={() => scrollToSection('saved')}>保存</button>
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
  &.weapon-bg button {
    background-color: #a77d00;
    &:hover {
      background-color: #8f6b00;
    }
  }
  &.armor-bg button {
    background-color: #c8551b;
    &:hover {
      background-color: #913000;
    }
  }
  button {
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
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
    button {
      padding: 5px 8px;
    }
  }
`

export default SideButtonNav
