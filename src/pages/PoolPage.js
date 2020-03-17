import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'

export default function PoolPage({ profiles, onDelete, onBookmarkClick }) {
  return (
    <>
      <Header title="Profile Pool" />
      <CardList
        profiles={profiles}
        onDelete={onDelete}
        handleBookmarkClick={onBookmarkClick}
      />
    </>
  )
}
