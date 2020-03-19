import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PropTypes from 'prop-types'

CardList.propTypes = {
  profiles: PropTypes.array,
}

export default function CardList({ profiles, onDelete, handleBookmarkClick }) {
  return (
    <Scroller>
      {profiles.map(user => (
        <Card
          key={user.id}
          user={user}
          {...user}
          onDelete={onDelete}
          handleBookmarkClick={handleBookmarkClick}
        />
      ))}
    </Scroller>
  )
}

const Scroller = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`
