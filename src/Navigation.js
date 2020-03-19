import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <NavigationStyled>
      <Button to="/profile-pool">Profiles</Button>
      <Button to="/create-profile">Create</Button>
      <Button to="/favorite-profile">Favorites</Button>
    </NavigationStyled>
  )
}

const Button = styled(NavLink)`
  flex-grow: 1;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  font-weight: bold;
  border: 1px solid white;
  font-weight: lighter;

  &.active {
    background: #549dd8;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-end: 3;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  z-index: 1;
  line-height: 2.4;
  box-shadow: 0 5px 7px 1px lightgrey;
`
