import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

FormRadioButton.propTypes = {
  register: PropTypes.func,
}

export default function FormRadioButton({ register }) {
  return (
    <RadioWrapper>
      <StyledRadioInput
        ref={register({ required: true })}
        required
        value="alumni"
        type="radio"
        name="status"
        id="alumni"
      />
      <StyledRadioLabel htmlFor="alumni">alumni</StyledRadioLabel>
      <StyledRadioInput
        ref={register({ required: true })}
        required
        value="newcomer"
        type="radio"
        name="status"
        id="newcomer"
      />
      <StyledRadioLabel htmlFor="newcomer">newcomer</StyledRadioLabel>
    </RadioWrapper>
  )
}

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledRadioInput = styled.input`
  width: 0;
  opacity: 0;
  position: fixed;
  &:checked + label {
    background: var(--color-green);
  }
`

const StyledRadioLabel = styled.label`
  background-color: #e8eeef;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: sans-serif, Arial;
  margin: 0 20px 20px;
  &:hover {
    background-color: #f4f7f8;
  }
`
