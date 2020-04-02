import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import FormContactSection from './FormContactSection'
import FormHead from './FormHead'
import FormProjectSection from './FormProjectSection'
import FormSkillTags from './FormSkillTags'

EditProfile.propTypes = {
  onEditProfile: PropTypes.func,
  profile: PropTypes.object,
}

export default function EditProfile({ onEditProfile, profile }) {
  const { register, handleSubmit } = useForm({ defaultValues: profile })

  return (
    <ScrollContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <FormHead register={register} />
        <FormContactSection register={register} />
        <FormProjectSection register={register} />
        <FormSkillTags register={register} />
        <ButtonStyled>Update profile</ButtonStyled>
      </FormStyled>
    </ScrollContainer>
  )

  function onSubmit(data) {
    onEditProfile({ ...profile, ...data })
  }
}

const FormStyled = styled.form`
  margin: 20px;
  padding: 20px;
  background: var(--color-lightGreen);
  border-radius: 8px;
  font-family: Georgia;
`

const ScrollContainer = styled.main`
  overflow-y: scroll;
  background: white;
`
const ButtonStyled = styled.button`
  display: block;
  padding: 19px 39px 18px 39px;
  color: var(--background-white);
  margin: 0 auto;
  background: var(--color-green);
  font-size: 18px;
  text-align: center;
  width: 100%;
  border: 1px solid var(--color-green);
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
`
