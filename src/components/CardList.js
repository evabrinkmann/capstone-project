import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PropTypes from 'prop-types'

CardList.propTypes = {
  profiles: PropTypes.array,
  handleDeleteCard: PropTypes.func,
  handleBookmarkClick: PropTypes.func,
  pathname: PropTypes.string,
  setProfiles: PropTypes.func,
}

export default function CardList({
  profiles,
  handleDeleteCard,
  handleBookmarkClick,
  pathname,
  setProfiles,
}) {
  return (
    <Scroller>
      {profiles.map(user => (
        <Card
          key={user.id}
          user={user}
          {...user}
          onDeleteCard={handleDeleteCard}
          handleBookmarkClick={handleBookmarkClick}
          pathname={pathname}
          setProfiles={setProfiles}
          profiles={profiles}
        />
      ))}
    </Scroller>
  )
}

const Scroller = styled.main`
  overflow-y: scroll;
  scroll-behavior: smooth;
`
