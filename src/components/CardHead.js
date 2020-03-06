import React from 'react'
import styled from 'styled-components/macro'

export default function CardHead({ img, name, title }) {
  return (
    <StyledHead>
      <img src={img} alt="portrait" />
      <h1>{name}</h1>
      <h2>{title}</h2>
    </StyledHead>
  )
}

const StyledHead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: normal;
  img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
  }
`
