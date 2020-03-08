import React from 'react'
import styled from 'styled-components/macro'

export default function NavFooter({ pageList, pageCreate }) {
  return (
    <StyledFooter>
      <p>{pageList}</p>
      <p>{pageCreate}</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-end: 2;
  gap: 1px;
  position: fixed;
  width: 100%;
  z-index: 1;
  bottom: 0;
  line-height: 1.4;
  background: #549dd8;
  box-shadow: 0 -5px 20px 1px lightgrey;
  color: white;

  p {
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`
