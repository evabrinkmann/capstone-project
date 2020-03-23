import React from 'react'
import Header from '../components/Header'
import CardList from '../components/CardList'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function FavoritePage({ profiles, onBookmarkClick, onDelete }) {
  const filteredProfiles = profiles.filter(profile => profile.isBookmarked)
  let { pathname } = useLocation()

  return (
    <PageLayout>
      <Header title="Favorites" />
      {filteredProfiles.length > 0 ? (
        <CardList
          pathname={pathname}
          profiles={filteredProfiles}
          onDelete={onDelete}
          handleBookmarkClick={onBookmarkClick}
        />
      ) : (
        <StyledParagraph>Bookmark your favorite profiles</StyledParagraph>
      )}
    </PageLayout>
  )
}
const StyledParagraph = styled.p`
  text-align: center;
  margin: 100px;
  word-wrap: break-all;
  font-size: 1em;
  text-transform: uppercase;
`
const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 55px auto;
  align-content: flex-start;
  overflow: auto;
`
