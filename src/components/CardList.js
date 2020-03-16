import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PropTypes from 'prop-types'

CardList.propTypes = {
  profiles: PropTypes.array,
}

export default function CardList({ profiles, onDelete, handleBookmarkClick }) {
  return (
    <Scroller>
      <StyledMain>
        {profiles.map(user => (
          <Card
            key={user.id}
            user={user}
            {...user}
            onDelete={onDelete}
            handleBookmarkClick={handleBookmarkClick}
          />
        ))}
      </StyledMain>
    </Scroller>
  )
}

const Scroller = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 70px 10px 30px;
`
