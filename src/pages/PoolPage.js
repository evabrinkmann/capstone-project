import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'

export default function PoolPage({ userData }) {
  return (
    <>
      <Header headerTitle="Profile Pool" />
      <CardList userData={userData} />
    </>
  )
}
