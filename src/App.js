import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import StartPage from './pages/StartPage'
import CreatePage from './pages/CreatePage'
import PoolPage from './pages/PoolPage'
import FavoritePage from './pages/FavoritePage'
import userData from './userData'
import { loadProfilesFromLocal, saveProfilesToLocal } from './utils'

export default function App() {
  const [profiles, setProfiles] = useState(
    loadProfilesFromLocal('profiles') || userData
  )

  useEffect(() => {
    saveProfilesToLocal('profiles', profiles)
  })

  return (
    <Router>
      <AppGrid>
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route exact path={'/profile-pool'}>
            <PoolPage
              profiles={profiles}
              onDelete={onDelete}
              onBookmarkClick={handleBookmarkClick}
              setProfiles={setProfiles}
            />
          </Route>
          <Route path="/create-profile">
            <CreatePage onAddProfile={handleAddProfile} />
          </Route>
          <Route path="/favorite-profile">
            <FavoritePage
              profiles={profiles}
              onBookmarkClick={handleBookmarkClick}
              onDelete={onDelete}
            />
          </Route>
        </Switch>
        <Navigation />
      </AppGrid>
    </Router>
  )

  function handleAddProfile(profile) {
    const newProfiles = [profile, ...profiles]
    setProfiles(newProfiles)
    saveProfilesToLocal('profiles', newProfiles)
  }

  function onDelete(id) {
    const indexCard = profiles.findIndex(profile => profile.id === id)
    setProfiles([
      ...profiles.slice(0, indexCard),
      ...profiles.slice(indexCard + 1),
    ])
  }

  function handleBookmarkClick(id) {
    const index = profiles.findIndex(profile => profile.id === id)
    const updatedProfile = {
      ...profiles[index],
      isBookmarked: !profiles[index].isBookmarked,
    }
    setProfiles([
      ...profiles.slice(0, index),
      updatedProfile,
      ...profiles.slice(index + 1),
    ])
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
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
`
