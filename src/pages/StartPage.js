import React from 'react'
import fishgroup from '../icon/fish-group.svg'
import styled from 'styled-components/macro'

export default function StartPage() {
  return (
    <>
      <StyledContainer>
        <h1>
          Welcome to <br /> newAlumni!
        </h1>
        <img src={fishgroup} alt="fish" />
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: #549dd8;
  background-image: linear-gradient(315deg, #1c93f3 0%, #90cdfe 74%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    color: white;
    font-weight: lighter;
  }
`
