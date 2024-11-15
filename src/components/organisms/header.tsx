import { FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'

const Header: FC = () => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')
  const isArmorPage = router.pathname.includes('/armor')

  return (
    <>
      <HeaderWrap id="header">
        <div className="header-inner">
          {isWeaponPage && (
            <Link href="/armor" className="link-change-btn toppan armor-btn">
              防具ver
            </Link>
          )}
          {isArmorPage && (
            <Link href="/weapon" className="link-change-btn toppan weapon-btn">
              武器ver
            </Link>
          )}
          <h1
            className={`toppan lh-18 ${isWeaponPage ? 'weapon-color' : 'armor-color'}`}
          >
            モンハン アイスボーン
            <br className="d-block d-md-none" />
            {isWeaponPage ? '武器素材計算ツール' : '防具素材計算ツール'}
          </h1>
          <p className="caution">
            ※素材や数値の誤り、動作の不具合等がありましたら
            <br className="d-block d-md-none" />
            お手数ですが下記Xアカウントまでご報告お願いします。
          </p>
          <p className="text-center">
            製作者→なんかつくる人
            <br />
            X→
            <Link href="https://x.com/nankatsukuru" target="_blank">
              @nankatsukuru
            </Link>
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
    .link-change-btn {
      display: block;
      width: fit-content;
      margin-inline: auto;
      margin-bottom: 10px;
      padding: 5px 20px;
      color: #fff !important;
      border-radius: 6px;
      transition: all 0.3s ease-in-out;
    }
    .armor-btn {
      background-color: #c8551b;
      &:hover {
        background-color: #913000;
      }
    }
    .weapon-btn {
      background-color: #a77d00;
      &:hover {
        background-color: #8f6b00;
      }
    }
    h1 {
      font-size: 18px;
      text-align: center;
    }
    .weapon-color {
      color: #a77d00;
    }
    .armor-color {
      color: #c8551b;
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
