import React from 'react'
import Header from '../components/Header'
import CreateProfile from '../components/CreateProfile'
import { useHistory } from 'react-router-dom'

export default function CreatePage({ onAddProfile }) {
  const history = useHistory()
  return (
    <>
      <Header headerTitle="Create Profile" />
      <CreateProfile onAddProfile={handleAdd} />
    </>
  )

  function handleAdd(user) {
    onAddProfile(user)
    history.push('/profile-pool')
  }
}
