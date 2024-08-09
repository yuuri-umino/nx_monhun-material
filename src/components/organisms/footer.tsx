import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return (
    <>
      <FooterContainer>
        <small>Monster Hunter アイスボーン素材計算ツール@2024</small>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.footer`
  margin-top: 50px;
  text-align: center;
  font-size: 12px;
  transition: all 0.5s;
  color: #383838;
`

export default Footer
