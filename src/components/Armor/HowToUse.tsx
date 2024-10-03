// components/HowToUse.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { HowToUseList } from '../../utils/howToUseList'

const HowToUse: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HowToUseContainer id="how-to-use">
      <h2 className="toppan">このツールの使い方</h2>
      <button onClick={toggleOpen} className="toggle-button">
        {isOpen ? '閉じる' : '開く'}
      </button>
      {isOpen && (
        <ul>
          {HowToUseList.armor.map((item, index) => (
            <li key={index}>
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
  h2 {
    color: #c8551b;
    text-align: center;
  }
  .toggle-button {
    display: block;
    margin: 0 auto 10px;
    padding: 5px 10px;
    background-color: #c8551b;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #913000;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      background-color: #fff3ed;
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
