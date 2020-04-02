import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import FormRadioButton from './FormRadioButton'

FormHead.propTypes = {
  register: PropTypes.func,
}

export default function FormHead({ register }) {
  return (
    <StyledFormHead>
      <h3>
        <span>1</span>User Info
      </h3>
      <FormRadioButton register={register} />

      <label>
        <StyledInputText
          ref={register({ required: true })}
          name="name"
          type="text"
          placeholder="Your name *"
        />
      </label>
      <label>
        <StyledInputText
          ref={register({ required: true })}
          name="title"
          type="text"
          placeholder="Your profession *"
        />
      </label>
    </StyledFormHead>
  )
}

const StyledFormHead = styled.div`
  span {
    background: var(--color-green);
    color: var(--background-white);
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 10px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 15px 15px 15px 0;
  }
`

const StyledInputText = styled.input`
  height: 34px;
  border: 0;
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  background-color: #e8eeef;
  color: #353b40;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`
