import React from 'react'
import Header from '../components/Header'
import EditProfile from '../components/EditProfile'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

EditPage.propTypes = {
  onEditProfile: PropTypes.func,
  profiles: PropTypes.array,
}

export default function EditPage({ onEditProfile, profiles }) {
  const history = useHistory()
  const { id } = useParams()
  const profile = profiles.find(profile => profile.id === id)
  return (
    <PageLayout>
      <Header title="Edit" />
      <EditProfile onEditProfile={handleEdit} profile={profile} />
    </PageLayout>
  )

  function handleEdit(profile) {
    onEditProfile(profile)
    history.push('/profile-pool')
  }
}
const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 55px auto;
  align-content: flex-start;
  overflow: auto;
`
