import React from 'react'
import styled from 'styled-components/macro'

export default function FormHead({ register }) {
  return (
    <StyledFormHead>
      <h3>
        <span>1</span>User Info
      </h3>
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
    background: #1abc9c;
    color: #fff;
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

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledRadioInput = styled.input`
  width: 0;
  opacity: 0;
  position: fixed;
  &:checked + label {
    background: #1abc9c;
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
