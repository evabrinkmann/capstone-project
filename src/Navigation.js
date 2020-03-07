import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

const Button = styled(NavLink)`
  flex-grow: 1;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;

  &.active {
    background: hotpink;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-end: 2;
`

export default function Navigation() {
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    console.log('Effect Navigation')
  }, [toggle])

  return (
    <NavigationStyled onClick={() => setToggle(!toggle)}>
      <Button exact to="/">
        Home
      </Button>
      <Button to="/create">Create</Button>
    </NavigationStyled>
  )
}
