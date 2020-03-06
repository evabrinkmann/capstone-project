import React, { useState } from 'react'
import SingleCard from './SingleCard'

export default function CardList({ userData }) {
  const [activeCard, setActiveCard] = useState('')

  return (
    <>
      {userData.map(user => (
        <SingleCard
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
