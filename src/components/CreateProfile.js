import React from 'react'
import styled from 'styled-components/macro'
import FormHead from './FormHead'
import FormContactSection from './FormContactSection'
import FormProjectSection from './FormProjectSection'
import FormSkillTags from './FormSkillTags'
import { v4 } from 'uuid'
import { useForm } from 'react-hook-form'

export default function CreateProfile({ onAddProfile }) {
  const { register, handleSubmit } = useForm()

  return (
    <ScrollContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <FormHead register={register} />
        <FormContactSection register={register} />
        <FormProjectSection register={register} />
        <FormSkillTags register={register} />
        <ButtonStyled>Submit</ButtonStyled>
      </FormStyled>
    </ScrollContainer>
  )

  function onSubmit(data) {
    onAddProfile({ id: v4(), ...data })
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
