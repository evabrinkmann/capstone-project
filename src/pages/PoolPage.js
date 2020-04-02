import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PoolPage.propTypes = {
  profiles: PropTypes.array,
  onDeleteCard: PropTypes.func,
  onBookmarkClick: PropTypes.func,
  setProfiles: PropTypes.func,
}

export default function PoolPage({
  profiles,
  onDeleteCard,
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
        handleDeleteCard={onDeleteCard}
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
