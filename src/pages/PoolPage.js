import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function PoolPage({
  profiles,
  onDelete,
  onBookmarkClick,
  setProfiles,
}) {
  let { pathname } = useLocation()

  return (
    <PageLayout>
      <Header title="newAlumni" />
      <CardList
        pathname={pathname}
        profiles={profiles}
        onDelete={onDelete}
        handleBookmarkClick={onBookmarkClick}
        setProfiles={setProfiles}
      />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 55px auto;
  align-content: flex-start;
  overflow: auto;
`
