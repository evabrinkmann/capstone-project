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
  margin: 70px 20px;
  padding: 20px;
  max-width: 400px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

const ScrollContainer = styled.div`
  overflow-y: scroll;
  background: white;
`
const ButtonStyled = styled.button`
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  margin: 0 auto;
  background: #1abc9c;
  font-size: 18px;
  text-align: center;
  width: 100%;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
`
