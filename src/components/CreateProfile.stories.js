import React from 'react'
import CreateProfile from './CreateProfile'

export default {
  title: 'components/Create Profile',
  component: CreateProfile,
  decorators: [renderProfile => <div>{renderProfile()}</div>],
}

export const Profile = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <CreateProfile onAddProfile={handleAdd} />
  </div>
)

function handleAdd(profile) {
  onAddProfile(profile)
  history.push('/profile-pool')
}
