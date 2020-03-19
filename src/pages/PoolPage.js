import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import fishred from '../icon/red-fish.svg'
import styled from 'styled-components/macro'

export default function PoolPage({ profiles, onDelete, onBookmarkClick }) {
  return (
    <>
      <Header title="newAlumni" />
      <StyledFishRed src={fishred} />
      <CardList
        profiles={profiles}
        onDelete={onDelete}
        handleBookmarkClick={onBookmarkClick}
      />
    </>
  )
}

const StyledFishRed = styled.img`
  position: absolute;
  right: 45px;
  top: 14px;
  z-index: 1;
  opacity: 0.5;
`
