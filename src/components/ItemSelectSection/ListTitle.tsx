import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface ListTitleProps {
  selectedDerivationName: string | null
}

const ListTitle: React.FC<ListTitleProps> = ({ selectedDerivationName }) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <Title className="toppan">
      {selectedDerivationName}
      {isWeaponPage ? '' : 'シリーズ'}
    </Title>
  )
}

const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  color: #333;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`

export default ListTitle
