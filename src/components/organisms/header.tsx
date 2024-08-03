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
            武器素材検索ツール
          </h1>
          <nav></nav>
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
