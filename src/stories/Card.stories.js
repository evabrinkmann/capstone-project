import React from 'react'
import Card from '../components/Card'
import userData from '../userData'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [renderCard => <div>{renderCard()}</div>],
}

export const ProfileCardActive = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <Card user={userData[0]} setActiveCard={() => {}} isActive={true} />
  </div>
)

export const ProfileCardNotActive = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <Card user={userData[1]} setActiveCard={() => {}} isActive={false} />
  </div>
)
