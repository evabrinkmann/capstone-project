import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import profilegroup from './icon/image_profiles_white.png'
import addProfile from './icon/add-profile_white.png'
import bookmarkProfile from './icon/bookmark_white.png'

export default function Navigation() {
  return (
    <NavigationStyled>
      <Button to="/profile-pool">
        <StyledProfileGroup
          src={profilegroup}
          alt="profiles"
        ></StyledProfileGroup>
      </Button>
      <Button to="/create-profile">
        <StyledAddProfile src={addProfile} alt="add-profile"></StyledAddProfile>
      </Button>
      <Button to="/favorite-profile">
        <StyledBookmarkProfile
          src={bookmarkProfile}
          alt="add-profile"
        ></StyledBookmarkProfile>
      </Button>
    </NavigationStyled>
  )
}

const Button = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid white;
  font-weight: lighter;
  background-color: #7f7f7f;
  background-image: linear-gradient(315deg, #b9b9b9 0%, #7f7f7f 74%);

  &.active {
    background-color: #549dd8;
    background-image: linear-gradient(315deg, #91ceff 0%, #549dd8 74%);
  }
`
const StyledProfileGroup = styled.img`
  width: 50px;
  height: 50px;
`

const StyledAddProfile = styled.img`
  width: 30px;
  height: 30px;
`

const StyledBookmarkProfile = styled.img`
  width: 30px;
  height: 30px;
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-end: 3;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  z-index: 1;
  line-height: 2.4;
  box-shadow: 0 5px 7px 1px lightgrey;
`
