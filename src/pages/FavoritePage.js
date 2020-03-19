import React from 'react'
import Header from '../components/Header'
import CardList from '../components/CardList'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function FavoritePage({ profiles, onBookmarkClick, onDelete }) {
  const filterProfiles = profiles.filter(
    profile => profile.isBookmarked === true
  )
  let { pathname } = useLocation()

  return (
    <>
      <Header title="Favorites" />
      {filterProfiles.length > 0 ? (
        <CardList
          pathname={pathname}
          profiles={filterProfiles}
          onDelete={onDelete}
          handleBookmarkClick={onBookmarkClick}
        />
      ) : (
        <StyledParagraph>Bookmark your favorite profiles</StyledParagraph>
      )}
    </>
  )
}
const StyledParagraph = styled.p`
  text-align: center;
  margin: 100px;
  word-wrap: break-all;
  font-size: 1em;
  text-transform: uppercase;
`
