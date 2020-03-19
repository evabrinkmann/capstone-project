import React from 'react'
import styled from 'styled-components/macro'
import fishgroup from '../icon/fish-group.svg'
import fishred from '../icon/red-fish.svg'

export default function Header({ title }) {
  return (
    <StyledHeader>
      <StyledFish src={fishgroup} />
      {title}
      <StyledFishRed src={fishred} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  line-height: 2.2;
  background: #549dd8;
  box-shadow: 0 5px 20px 1px lightgrey;
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
const StyledFishRed = styled.img`
  position: absolute;
  right: 45px;
  top: 14px;
  z-index: 1;
  opacity: 0.5;
`
