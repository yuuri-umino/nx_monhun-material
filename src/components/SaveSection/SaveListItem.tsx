import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface SaveListItemProps {
  materialName: string
  quantity: number
  ownedQuantity: number
  isWeaponPage: boolean
}

const SaveListItem: React.FC<SaveListItemProps> = ({
  materialName,
  quantity,
  ownedQuantity,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')
  const isSufficient = ownedQuantity >= quantity

  return (
    <ListItem
      isSufficient={isSufficient}
      className={`toppan mb-2 ${isWeaponPage ? 'weapon' : 'armor'}`}
    >
      <MaterialName
        isSufficient={isSufficient}
        className={isWeaponPage ? 'weapon-material' : 'armor-material'}
      >
        {materialName}
      </MaterialName>
      <br className="d-none d-sm-block d-xl-none" />
      所持数: <span className="possessed">{ownedQuantity}</span> / {quantity}
    </ListItem>
  )
}

const ListItem = styled.li<{ isSufficient: boolean }>`
  position: relative;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 6px;
  color: #6f6f6f;
  width: 100%;
  .possessed {
    font-size: 20px;
  }
  &.weapon {
    background-color: #fffbe8;
    .possessed {
      color: ${({ isSufficient }) => (isSufficient ? '#a77d00' : '#6f6f6f')};
    }
  }
  &.armor {
    background-color: #fff3ed;
    .possessed {
      color: ${({ isSufficient }) => (isSufficient ? '#c8551b' : '#6f6f6f')};
    }
  }
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`

const MaterialName = styled.span<{ isSufficient: boolean }>`
  display: inline-block;
  color: ${({ isSufficient }) => (isSufficient ? '#fff' : '#6f6f6f')};
  padding: 2px 10px;
  border-radius: 6px;
  margin-bottom: 5px;
  margin-right: 10px;
  &.weapon-material {
    background-color: ${({ isSufficient }) =>
      isSufficient ? '#a77d00' : '#fff'};
  }
  &.armor-material {
    background-color: ${({ isSufficient }) =>
      isSufficient ? '#c8551b' : '#fff'};
  }
`

export default SaveListItem
