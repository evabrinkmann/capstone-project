import React from 'react'
import styled from 'styled-components/macro'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import userData from './userData'
import CardList from './components/CardList'

export default function App() {
  return (
    <AppGrid>
      <StyledHeader>Profile Pool</StyledHeader>
      <div style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}>
        <StyledMain>
          <CardList userData={userData} />
        </StyledMain>
      </div>
      <StyledFooter>
        <p>Profile Pool</p>
        <p>Create Profile</p>
      </StyledFooter>
    </AppGrid>
  )
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
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 60px 10px 30px;
`
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
const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
