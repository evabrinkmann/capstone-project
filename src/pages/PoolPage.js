import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'

export default function PoolPage({ profiles }) {
  return (
    <>
      <Header title="Profile Pool" />
      <CardList profiles={profiles} />
    </>
  )
}
