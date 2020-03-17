import React from 'react'
import Header from '../components/Header'
import fishgroup from '../icon/fish-group.svg'
import styled from 'styled-components/macro'

export default function StartPage() {
  return (
    <StyledContainer>
      <Header />
      <h1>
        Welcome <br /> to <br /> newAlumni!
      </h1>
      <img src={fishgroup} alt="fish" />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
