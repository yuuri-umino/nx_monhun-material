import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface DeleteRestoreBtnProps {
  onDelete: () => void
  onRestore: () => void
  isWeaponPage: boolean
}

const DeleteRestoreBtn: React.FC<DeleteRestoreBtnProps> = ({
  onDelete,
  onRestore,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <SaveRestoreBtn className={isWeaponPage ? 'weapon' : 'armor'}>
      <button className="delete-savedata me-2 mb-2 mb-md-0" onClick={onDelete}>
        DELETE
      </button>
      <button className="restore-savedata" onClick={onRestore}>
        RESTORE
      </button>
    </SaveRestoreBtn>
  )
}

const SaveRestoreBtn = styled.div`
  &.weapon {
    .delete-savedata,
    .restore-savedata {
      color: #d29204;
      border: 2px solid #d29204;
    }
  }
  &.armor {
    .delete-savedata,
    .restore-savedata {
      color: #c8551b;
      border: 2px solid #c8551b;
    }
  }
`

export default DeleteRestoreBtn
