import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import PoolPage from './pages/PoolPage'
import userData from './userData'

export default function App() {
  const [profiles, setProfiles] = useState(userData)

  return (
    <Router>
      <AppGrid>
        <Navigation />
        <Switch>
          <Route path="/profile-pool">
            <PoolPage profiles={profiles} />
          </Route>
          <Route path="/create-profile">
            <CreatePage onAddProfile={handleAddProfile} />
          </Route>
        </Switch>
      </AppGrid>
    </Router>
  )

  function handleAddProfile(profile) {
    console.log(profile)
    setProfiles([profile, ...profiles])
  }
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
