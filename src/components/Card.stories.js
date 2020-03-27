import React from 'react'
import Card from './Card'
import userData from '../userData'
import { action } from '@storybook/addon-actions'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [renderCard => <div>{renderCard()}</div>],
}

export const ProfileCard = () => (
  <div style={{ width: '400px', height: '700px', position: 'relative' }}>
    <Card
      user={userData[0]}
      pathname="/profile-pool"
      isBookmarked={false}
      handleBookmarkClick={action('onBookmarkClick')}
    />
  </div>
)

export const BookmarkedProfileCard = () => (
  <div style={{ width: '400px', height: '700px', position: 'relative' }}>
    <Card
      user={userData[0]}
      pathname="/profile-pool"
      isBookmarked={true}
      handleBookmarkClick={action('onBookmarkClick')}
    />
  </div>
)
