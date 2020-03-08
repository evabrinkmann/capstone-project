import React from 'react'
import CardList from './components/CardList'
import Header from './components/Header'

export default function ProfilePoolPage({ userData }) {
  return (
    <div>
      <Header headerTitle="Profile Pool" />
      <CardList userData={userData} />
    </div>
  )
}
