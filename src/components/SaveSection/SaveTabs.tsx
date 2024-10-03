import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

interface SaveTabsProps {
  savedResults: Array<{
    name: string
  }>
  activeIndex: number
  setActiveIndex: (index: number) => void
  isWeaponPage: boolean
}

const SaveTabs: React.FC<SaveTabsProps> = ({
  savedResults,
  activeIndex,
  setActiveIndex,
}) => {
  const router = useRouter()
  const isWeaponPage = router.pathname.includes('/weapon')

  return (
    <Tabs>
      {savedResults.map((result, index) => (
        <Tab
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          className={isWeaponPage ? 'tab-weapon' : 'tab-armor'}
        >
          {result.name}
        </Tab>
      ))}
    </Tabs>
  )
}

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 10px;
`

const Tab = styled.button<{ active: boolean }>`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 6px 6px 0 0;
  font-size: ${(props) => (props.active ? '16px' : '12px')};
  &.tab-weapon {
    border-bottom: 2px solid #a77d00;
    background: ${(props) => (props.active ? '#a77d00' : 'none')};
    color: ${(props) => (props.active ? '#fff' : '#a77d00')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  }
  &.tab-armor {
    border-bottom: 2px solid #c8551b;
    background: ${(props) => (props.active ? '#C8551B' : 'none')};
    color: ${(props) => (props.active ? '#fff' : '#C8551B')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  }
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export default SaveTabs
