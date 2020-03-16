import React from 'react'
import Header from '../components/Header'
import Bookmark from '../components/Bookmark'

export default function FavoritePage() {
  return (
    <>
      <Header title="Favorite Profiles" />
      <Bookmark
        onBookmarkClick={handleBookmarkClick}
        id={id}
        bookmarkStatus={isBookmarked}
      />
    </>
  )
}
