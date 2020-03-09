import React from 'react'
import styled from 'styled-components/macro'

export default function CheckboxAlumni() {
  return (
    <FormHead>
      <StyledCheckboxes>
        <label>
          <input name="active" type="checkbox" />
          alumni
        </label>
        <label>
          <input name="active" type="checkbox" />
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
        />
      </label>
      <label>
        *Your title:
        <StyledInput
          name="title"
          type="text"
          placeholder="e.g. Web Developer"
        />
      </label>
    </FormHead>
  )
}

const FormHead = styled.div`
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
