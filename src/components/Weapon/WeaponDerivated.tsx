import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconWeapon from '../../assets/icon-weapon.png'

const DerivatedCategory = () => {
  return (
    <>
      <DerivatedSection>
        <div className="section-border"></div>
      </DerivatedSection>
    </>
  )
}

const DerivatedSection = styled.div`
  padding: 0 30px 30px;
  background-color: #fff;
  border-radius: 30px;
  width: calc(100% - 40px);
  margin-inline: auto;
  .section-border {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f6dd94;
  }
  @media screen and (min-width: 576px) {
    width: 80%;
    padding: 0 50px 50px;
    .section-border {
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      padding-bottom: 30px;
      border-bottom: 3px solid #f6dd94;
    }
  }
  @media screen and (min-width: 768px) {
    .section-border {
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      padding-bottom: 40px;
    }
  }
  @media screen and (min-width: 992px) {
    padding: 0 90px 90px;
  }
`

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
  }
`

export default DerivatedCategory
