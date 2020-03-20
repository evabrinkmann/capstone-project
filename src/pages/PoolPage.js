import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

export default function PoolPage({ profiles, onDelete, onBookmarkClick }) {
  let { pathname } = useLocation()

  return (
    <>
      <Header title="newAlumni" />
      <CardList
        pathname={pathname}
        profiles={profiles}
        onDelete={onDelete}
        handleBookmarkClick={onBookmarkClick}
      />
    </>
  )
}
