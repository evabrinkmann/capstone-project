import React from 'react'
import styled from 'styled-components/macro'
import FormHead from './FormHead'
import FormContactSection from './FormContactSection'
import FormProjectSection from './FormProjectSection'
import FormSkillTags from './FormSkillTags'

export default function CreateCard() {
  return (
    <ScrollContainer>
      <FormStyled>
        <FormHead />
        <FormContactSection />
        <FormProjectSection />
        <FormSkillTags />
      </FormStyled>
    </ScrollContainer>
  )
}

const FormStyled = styled.form`
  margin: 100px 20px;
  padding: 20px;
`

const ScrollContainer = styled.div`
  overflow-y: scroll;
`
