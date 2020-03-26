import React from 'react'
import Card from './Card'
import userData from '../userData'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [renderCard => <div>{renderCard()}</div>],
}

// @TODO add mock state
let isBookmarkedStatus = false

export const ProfileCard = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <Card
      user={userData[0]}
      pathname="/profile-pool"
      isBookmarked={isBookmarkedStatus}
      handleBookmarkClick={() => console.log('Clicked')}
    />
  </div>
)
