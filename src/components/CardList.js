import React, { useState } from 'react'
import CardSingle from './CardSingle'
import PropTypes from 'prop-types'

CardList.propTypes = {
  userData: PropTypes.array,
}

export default function CardList({ userData }) {
  const [activeCard, setActiveCard] = useState('')

  return (
    <>
      {userData.map(user => (
        <CardSingle
          key={user.id}
          user={user}
          {...user}
          setActiveCard={setActiveCard}
          isActive={activeCard === user.id}
        />
      ))}
    </>
  )
}
