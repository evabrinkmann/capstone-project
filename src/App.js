import React from 'react'
import styled from 'styled-components'
import Logo from './img/fish-group.svg'

export default function App() {
  return (
    <Wrapper>
      <Title>hello capstone project</Title>

      <StyledImage src={Logo} alt="logo" />
    </Wrapper>
  )
}

const StyledImage = styled.img`
  opacity: 0.5;
`

const Title = styled.h1`
  font-family: 'Open Sans';
  font-size: 1.5em;
  text-align: center;
  color: white;
`
const Wrapper = styled.section`
  padding: 4em;
  background: lightblue;
`
