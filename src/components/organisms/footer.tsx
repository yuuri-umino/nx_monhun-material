import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return (
    <>
      <FooterContainer>
        <small></small>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.footer`
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  z-index: 100;
  writing-mode: tb-rl;
  font-size: 12px;
  transition: all 0.5s;
  color: #383838;
`

export default Footer
