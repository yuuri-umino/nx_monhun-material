import { FC } from 'react'
import styled from 'styled-components'
// import Link from 'next/link'
// import Image from 'next/image'

const Header: FC = () => {
  return (
    <>
      <HeaderWrap id="header">
        <div className="header-inner">
          <h1 className="toppan lh-18">
            モンハン アイスボーン
            <br className="d-block d-md-none" />
            武器素材計算ツール
          </h1>
          <p className="caution">
            ※強化素材のみです。生産の場合は加味していません。
            <br className="d-block d-md-none" />
            ごめんなさい。
          </p>
        </div>
      </HeaderWrap>
    </>
  )
}

const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  z-index: 1000;
  .header-inner {
    h1 {
      color: #a77d00;
      font-size: 18px;
      text-align: center;
    }
    .caution {
      font-size: 12px;
      color: #494949;
      text-align: center;
    }
  }
  @media screen and (min-width: 768px) {
    .header-inner {
      h1 {
        font-size: 30px;
      }
    }
  }
`

export default Header
