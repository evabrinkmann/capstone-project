import React from 'react'
import styled from 'styled-components/macro'

export default function FormHead({ register }) {
  return (
    <StyledFormHead>
      <h3>
        <span>1</span>User Info
      </h3>
      <StyledRadioButton>
        <input
          ref={register({ required: true })}
          required
          value="alumni"
          type="radio"
          name="status"
          id="alumni"
        />
        <StyledLabel htmlFor="alumni">alumni</StyledLabel>
        <input
          ref={register({ required: true })}
          required
          value="newcomer"
          type="radio"
          name="status"
          id="newcomer"
        />
        <label htmlFor="newcomer">newcomer</label>
        {/* <label>
          <input
            ref={register({ required: true })}
            name="status"
            value="alumni"
            type="radio"
          />
          alumni
        </label> */}
        {/* <label>
          <input
            ref={register({ required: true })}
            name="status"
            value="newcomer"
            type="radio"
          />
          new
        </label> */}
      </StyledRadioButton>
      <label>
        <StyledInput
          ref={register({ required: true })}
          name="name"
          type="text"
          placeholder="Your name *"
        />
      </label>
      <label>
        <StyledInput
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
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 15px 15px 15px 0;
  }
`

const StyledRadioButton = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;

  input:checked + label {
    color: #1abc9c;
  }
`
const StyledLabel = styled.label`
  margin-right: 100px;
`

const StyledInput = styled.input`
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
