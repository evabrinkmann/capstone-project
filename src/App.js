import React from 'react'
import styled from 'styled-components/macro'
import userData from './userData'
import CardList from './components/CardList'
import Header from './components/Header'
import NavFooter from './components/NavFooter'

export default function App() {
  return (
    <AppGrid>
      <Header title="Profile Pool" />
      <CardList userData={userData} />
      <NavFooter pageList="Profile Pool" pageCreate="Create Profile" />
    </AppGrid>
  )
}

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
