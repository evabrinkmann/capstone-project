import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FormHead from './FormHead'
import FormContactSection from './FormContactSection'
import FormProjectSection from './FormProjectSection'
import FormSkillTags from './FormSkillTags'

export default function CreateProfile() {
  const [user, setUser] = useState({
    name: '',
    title: '',
    company: '',
    location: '',
    email: '',
  })

  return (
    <ScrollContainer>
      <FormStyled onSubmit={handleSubmit}>
        <FormHead
          onNameChange={handleNameChange}
          onTitleChange={handleTitleChange}
          name={user.name}
          title={user.title}
        />
        <FormContactSection
          onCompanyChange={handleCompanyChange}
          company={user.company}
          onLocationChange={handleLocationChange}
          location={user.location}
          onEmailChange={handleEmailChange}
          email={user.email}
        />
        <FormProjectSection />
        <FormSkillTags />
        <ButtonStyled>Submit</ButtonStyled>
      </FormStyled>
    </ScrollContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    console.log(user)
  }

  function handleNameChange(name) {
    setUser({ ...user, name })
  }

  function handleTitleChange(title) {
    setUser({ ...user, title })
  }

  function handleCompanyChange(company) {
    setUser({ ...user, company })
  }

  function handleLocationChange(location) {
    setUser({ ...user, location })
  }

  function handleEmailChange(email) {
    setUser({ ...user, email })
  }
}

const FormStyled = styled.form`
  margin: 100px 20px;
  padding: 20px;
`

const ScrollContainer = styled.div`
  overflow-y: scroll;
`
const ButtonStyled = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid black;
`
