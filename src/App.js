import React from 'react'
import userData from './userData'
import CardList from './components/CardList'

export default function App() {
  return <CardList userData={userData} />
}
