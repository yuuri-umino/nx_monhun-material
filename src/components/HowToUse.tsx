// components/HowToUse.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { HowToUseList } from '../utils/howToUseList'

const HowToUse: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HowToUseContainer id="how-to-use">
      <h2 className={`toppan ${isWeaponPage ? 'weapon-color' : 'armor-color'}`}>
        このツールの使い方
      </h2>
      <button
        onClick={toggleOpen}
        className={`toggle-button ${isWeaponPage ? 'weapon-bg' : 'armor-bg'}`}
      >
        {isOpen ? '閉じる' : '開く'}
      </button>
      {isOpen && (
        <ul>
          {HowToUseList.armor.map((item, index) => (
            <li
              key={index}
              className={isWeaponPage ? 'weapon-bg-opa' : 'armor-bg-opa'}
            >
              {item.title}
              {item.desc && (
                <>
                  <br />
                  <span>{item.desc}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </HowToUseContainer>
  )
}

const HowToUseContainer = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 30px;
  width: calc(100% - 40px);
  margin-inline: auto;
  .weapon-color {
    color: #a77d00;
  }
  .weapon-bg {
    background-color: #a77d00;
    &:hover {
      background-color: #8f6b00;
    }
  }
  .weapon-bg-opa {
    background-color: #fffbe8;
  }
  .armor-color {
    color: #c8551b;
  }
  .armor-bg {
    background-color: #c8551b;
    &:hover {
      background-color: #913000;
    }
  }
  .armor-bg-opa {
    background-color: #fff3ed;
  }
  h2 {
    text-align: center;
  }
  .toggle-button {
    display: block;
    margin: 0 auto 10px;
    padding: 5px 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      color: #494949;
      margin-bottom: 8px;
      padding: 5px;
      border-radius: 6px;
      font-weight: bold;
      span {
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
  @media screen and (min-width: 576px) {
    width: 80%;
    padding: 20px;
    ul {
      li {
        margin-bottom: 10px;
        padding: 5px 10px;
      }
    }
  }
`

export default HowToUse
