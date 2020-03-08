import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import ProfilePoolPage from './ProfilePoolPage'
import userData from './userData'

export default function App() {
  return (
    <Router>
      <AppGrid>
        <Navigation />
        <Switch>
          <Route exact path="/profile-pool">
            <ProfilePoolPage userData={userData} />
          </Route>
          <Route path="/create">
            <section>Create</section>
          </Route>
        </Switch>
      </AppGrid>
    </Router>
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
  overflow-y: scroll;
  scroll-behavior: smooth;
`
