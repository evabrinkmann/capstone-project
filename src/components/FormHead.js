import React from 'react'
import styled from 'styled-components/macro'

export default function FormHead({ onNameChange, onTitleChange, name, title }) {
  return (
    <StyledFormHead>
      <StyledCheckboxes>
        <label>
          <input name="active" value="alumni" type="radio" />
          alumni
        </label>
        <label>
          <input name="active" value="new" type="radio" />
          new
        </label>
      </StyledCheckboxes>
      <h3>Name</h3>
      <label>
        *Your name:
        <StyledInput
          name="name"
          type="text"
          placeholder="e.g. Max Mustermann"
          value={name}
          onChange={event => onNameChange(event.target.value)}
        />
      </label>
      <label>
        *Your title:
        <StyledInput
          name="title"
          type="text"
          placeholder="e.g. Web Developer"
          value={title}
          onChange={event => onTitleChange(event.target.value)}
        />
      </label>
    </StyledFormHead>
  )
}

const StyledFormHead = styled.div`
  margin-bottom: 50px;
`

const StyledCheckboxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
`
