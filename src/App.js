import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import PoolPage from './pages/PoolPage'
import userData from './userData'
import { loadProfilesFromLocal, saveProfilesToLocal } from './utils'

export default function App() {
  const [profiles, setProfiles] = useState(
    loadProfilesFromLocal('profiles') || userData
  )

  return (
    <Router>
      <AppGrid>
        <Navigation />
        <Switch>
          <Route exact path={['/', '/profile-pool']}>
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
    const newProfiles = [profile, ...profiles]
    setProfiles(newProfiles)
    saveProfilesToLocal('profiles', newProfiles)
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
