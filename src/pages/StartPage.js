import React from 'react'
import fishgroup from '../icon/fish-group.svg'
import styled from 'styled-components/macro'

export default function StartPage() {
  return (
    <>
      <StyledContainer>
        <h1>Welcome to newAlumni!</h1>
        <img src={fishgroup} alt="fish" />
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  height: 100vh;
  background: var(--color-blue);
  h1 {
    text-align: center;
    margin: 220px 100px;
    color: white;
    font-weight: lighter;
    position: relative;
  }
  img {
    position: absolute;
    bottom: 300px;
    left: 175px;
  }
`
