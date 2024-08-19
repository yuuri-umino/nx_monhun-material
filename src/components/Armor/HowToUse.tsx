// components/HowToUse.tsx
import React, { useState } from 'react'
import styled from 'styled-components'

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
          <li>①防具のランクを選択</li>
          <li>②シリーズを選択</li>
          <li>
            ③素材を計算したい防具を選択
            <br />
            <span>シリーズをまたいで複数選択可</span>
          </li>
          <li>④Let’s Calculate!</li>
          <li>
            ⑤各素材の所持数を入力する
            <br />
            <span>
              必要個数に達したら⭕️が表示されます。
              <br />
              入力した内容はRESETボタンでリセットができます。
            </span>
          </li>
          <li>
            ⑥結果を保存する
            <br />
            <span>
              検索した結果は各素材に入力した所持個数と一緒に名前をつけて保存できます。
              <br />
              結果は5件まで保存でき、6件以上登録すると古い順から削除されます。
              <br />
              任意で削除することも可能です。
            </span>
          </li>
          <li>
            ⑦保存した結果を戻す
            <br />
            <span>
              一度保存したデータを再度計算結果に戻すことが出来ます。
              <br />
              戻したい保存データのタブを選択し表示した状態でRESTOREボタンをクリックしてください。
            </span>
          </li>
          <li>
            💡素材の入手場所がわからない場合
            <br />
            <span>
              計算結果の素材名にパソコンでご覧の場合はマウスをホバー、スマートフォンでご覧の場合はクリックをすることで素材の入手場所を確認することができます。
            </span>
          </li>
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
