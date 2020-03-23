import React from 'react'
import Header from '../components/Header'
import CreateProfile from '../components/CreateProfile'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function CreatePage({ onAddProfile }) {
  const history = useHistory()
  return (
    <PageLayout>
      <Header title="Create" />
      <CreateProfile onAddProfile={handleAdd} />
    </PageLayout>
  )

  function handleAdd(profile) {
    onAddProfile(profile)
    history.push('/profile-pool')
  }
}
const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 55px auto;
  align-content: flex-start;
  overflow: auto;
`
