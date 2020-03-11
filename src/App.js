import React, { useState } from 'react'
import styled from 'styled-components/macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import Navigation from './Navigation'
import PoolPage from './pages/PoolPage'
import CreatePage from './pages/CreatePage'
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
  /* overflow-y: scroll;
  scroll-behavior: smooth; */
`
