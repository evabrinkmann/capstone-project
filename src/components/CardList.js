import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PropTypes from 'prop-types'

CardList.propTypes = {
  userData: PropTypes.array,
}

export default function CardList({ userData }) {
  const [activeCard, setActiveCard] = useState('')

  return (
    <StyledMain>
      {userData.map(user => (
        <Card
          key={user.id}
          user={user}
          {...user}
          setActiveCard={setActiveCard}
          isActive={activeCard === user.id}
        />
      ))}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 60px 10px 30px;
`
