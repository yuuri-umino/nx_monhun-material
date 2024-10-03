import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface CalculateBtnProps {
  onClick: () => void
}

const CalculateBtn: React.FC<CalculateBtnProps> = ({ onClick }) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <Button
      className={`toppan calc-btn py-2 ${isWeaponPage ? 'weapon' : 'armor'}`}
      type="button"
      onClick={onClick}
    >
      Calculate!
    </Button>
  )
}

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  margin-top: 40px;
  margin-inline: auto;
  transition: 0.3s ease-in-out;
  text-align: center;
  background-color: transparent;
  border: none;
  &.weapon {
    color: #d29204;
    &::before,
    &::after {
      border-color: #d29204;
    }
    &:hover:before,
    &:hover:after {
      border-color: #d29204;
    }
    &:hover {
      background-color: #d29204;
      border-color: #d29204;
    }
  }
  &.armor {
    color: #f6874f;
    &::before,
    &::after {
      border-color: #f6874f;
    }
    &:hover:before,
    &:hover:after {
      border-color: #f6874f;
    }
    &:hover {
      background-color: #f6874f;
      border-color: #f6874f;
    }
  }
  &::before,
  &::after {
    content: '';
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-style: solid;
    display: block;
    position: absolute;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    top: -6px;
    left: -6px;
    border-width: 2px 0 0 2px;
    z-index: 5;
  }
  &:after {
    bottom: -6px;
    right: -6px;
    border-width: 0 2px 2px 0;
  }
  &:hover:before,
  &:hover:after {
    width: calc(100% + 12px);
    height: calc(100% + 12px);
  }
  &:hover {
    color: #fff;
  }
`

export default CalculateBtn
