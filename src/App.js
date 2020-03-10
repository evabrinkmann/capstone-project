import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import PoolPage from './pages/PoolPage'
import CreatePage from './pages/CreatePage'
import userData from './userData'
import { cardsRef } from './components/firebase'

export default function App() {
  cardsRef.add({
    id: 1,
    status: 'alumni',
    imgUrl: './img/natalie-square.jpg',
    name: 'Natalie Fuchs',
    title: 'Frontend Developer',
    company: 'Argonauten GmbH',
    country: 'Hamburg, Germany',
    email: 'natalie.fuchs@argonauten.de',
    capstoneName: 'Stadt, Land, Fuchs App',
    capstoneLink: 'https://github.com/ntlfox/stadt-land-name',
    personalWebsite: 'https://github.com/ntlfox/personal-website',
    github: 'https://github.com/ntlfox',
    codepen: 'https://codepen.io/ntlfox/',
    skills: ['react', 'html', 'css', 'sass', 'bootstrap', 'javascript'],
  })

  return (
    <Router>
      <AppGrid>
        <Navigation />
        <Switch>
          <Route path="/profile-pool">
            <PoolPage userData={userData} />
          </Route>
          <Route path="/create-profile">
            <CreatePage />
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
  /* overflow-y: scroll;
  scroll-behavior: smooth; */
`
