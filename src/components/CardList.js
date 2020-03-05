import React from 'react'
import SingleCard from './SingleCard'

export default function CardList({ userData }) {
  return (
    <>
      {userData.map(user => (
        <SingleCard key={user.id} user={user}></SingleCard>
      ))}
    </>
  )
}
