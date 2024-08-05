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
          <li>①武器の種類を選択</li>
          <li>②派生先を選択</li>
          <li>③素材を計算したい武器を選択(複数選択可)</li>
          <li>④Let’s Calculate!</li>
          <li>
            ⑤各素材の所持数を入力する
            <br className="d-block d-sm-none" />
            <span className="d-block">
              必要個数に達したら⭕️が表示されます。
              <br />
              入力した内容はRESETボタンでリセットができます。
            </span>
          </li>
          <li>
            ⑥結果を保存する
            <br />
            <span className="d-dlock">
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
            <span className="d-dlock">
              一度保存したデータを再度計算結果に戻すことが出来ます。
              <br />
              戻したい保存データのタブを選択し表示した状態でRESTOREボタンをクリックしてください。
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
    color: #a77d00;
    text-align: center;
  }
  .toggle-button {
    display: block;
    margin: 0 auto 10px;
    padding: 5px 10px;
    background-color: #a77d00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      background-color: #fffbe8;
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
