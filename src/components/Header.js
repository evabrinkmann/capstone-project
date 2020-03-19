import React from 'react'
import styled from 'styled-components/macro'
import fishgroup from '../icon/fish-group.svg'

export default function Header({ title }) {
  return (
    <StyledHeader>
      <StyledFish src={fishgroup} />

      {title}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  line-height: 2.2;
  background: #549dd8;
  box-shadow: 0 5px 20px 1px lightgrey;
  font-weight: bold;
  text-align: center;
  font-size: 27px;
  color: white;
  font-weight: lighter;
`
const StyledFish = styled.img`
  position: absolute;
  left: 14px;
  top: 5px;
  opacity: 0.5;
`
