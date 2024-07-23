import { FC } from 'react'
import styled from 'styled-components'
// import Link from 'next/link'
// import Image from 'next/image'

const Header: FC = () => {
  return (
    <>
      <HeaderWrap id="header">
        <div className="header-inner">
          <h1></h1>

          <nav></nav>
        </div>
      </HeaderWrap>
    </>
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  .header-inner {
    .header-title {
      position: relative;
      color: #383838;
      margin: 0;
      padding: 5px 0;
      font-size: 20px;
      transition: all 0.5s;
      &.active {
        color: #fff;
      }
    }
  }
`

export default Header
