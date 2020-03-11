import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import PropTypes from 'prop-types'

CardList.propTypes = {
  profiles: PropTypes.array,
}

export default function CardList({ profiles }) {
  const [activeCard, setActiveCard] = useState('')

  return (
    <div style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}>
      <StyledMain>
        {profiles.map(user => (
          <Card
            key={user.id}
            user={user}
            {...user}
            setActiveCard={setActiveCard}
            isActive={activeCard === user.id}
          />
        ))}
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 70px 10px 30px;
`
