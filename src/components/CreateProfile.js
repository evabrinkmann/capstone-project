import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FormHead from './FormHead'
import FormContactSection from './FormContactSection'
import FormProjectSection from './FormProjectSection'
import FormSkillTags from './FormSkillTags'

export default function CreateProfile({ onAddProfile }) {
  const [user, setUser] = useState({
    name: '',
    title: '',
    company: '',
    location: '',
    email: '',
    capstoneName: '',
    capstoneLink: '',
    personalWebsite: '',
    github: '',
    codepen: '',
    status: 'alumni',
    skills: [],
  })

  return (
    <ScrollContainer>
      <FormStyled onSubmit={handleSubmit}>
        <FormHead
          onNameChange={handleNameChange}
          onTitleChange={handleTitleChange}
          name={user.name}
          title={user.title}
          onStatusChange={handleStatusChange}
          selectedStatus={user.status}
        />
        <FormContactSection
          onCompanyChange={handleCompanyChange}
          company={user.company}
          onLocationChange={handleLocationChange}
          location={user.location}
          onEmailChange={handleEmailChange}
          email={user.email}
        />
        <FormProjectSection
          onCapstoneNameChange={handleCapstoneNameChange}
          capstoneName={user.capstoneName}
          onCapstoneLinkChange={handleCapstoneLinkChange}
          capstoneLink={user.capstoneLink}
          personalWebsite={user.personalWebsite}
          onPersonalWebsiteChange={handlePersonalWebsiteChange}
          github={user.github}
          onGithubChange={handleGithubChange}
          codepen={user.codepen}
          onCodepenChange={handleCodepenChange}
        />
        <FormSkillTags skills={user.skills} onSkillChange={handleSkillChange} />
        <ButtonStyled>Submit</ButtonStyled>
      </FormStyled>
    </ScrollContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onAddProfile(user)
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

  function handleCapstoneNameChange(capstoneName) {
    setUser({ ...user, capstoneName })
  }
  function handleCapstoneLinkChange(capstoneLink) {
    setUser({ ...user, capstoneLink })
  }
  function handlePersonalWebsiteChange(personalWebsite) {
    setUser({ ...user, personalWebsite })
  }
  function handleGithubChange(github) {
    setUser({ ...user, github })
  }
  function handleCodepenChange(codepen) {
    setUser({ ...user, codepen })
  }

  function handleStatusChange(status) {
    setUser({ ...user, status })
  }

  function handleSkillChange(skill) {
    console.log(skill)
    if (user.skills.includes(skill)) {
      setUser({ ...user, skills: user.skills.filter(s => s !== skill) })
    } else {
      setUser({ ...user, skills: [...user.skills, skill] })
    }
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
