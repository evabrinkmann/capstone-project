import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ title }) {
  return <StyledHeader>{title}</StyledHeader>
}

const StyledHeader = styled.header`
  display: grid;
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
`
