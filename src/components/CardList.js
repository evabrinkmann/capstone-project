import React, { useState } from 'react'
import CardSingle from './CardSingle'

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
