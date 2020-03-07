import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import userData from './userData'

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage userData={userData} />
          </Route>
          <Route path="/create">
            <section>Create</section>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
