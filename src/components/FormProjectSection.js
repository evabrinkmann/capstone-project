import React from 'react'
import styled from 'styled-components/macro'

export default function FormProjectSection() {
  return (
    <div>
      <h3>Projects</h3>
      <label>
        *capstone project:
        <StyledInput
          name="capstoneName"
          type="text"
          placeholder="e.g. Recipe App, Language App etc."
        />
      </label>
      <label>
        capstone project Link:
        <StyledInput
          name="capstoneLink"
          type="text"
          placeholder="https://..."
        />
      </label>
      <label>
        personal-Website:
        <StyledInput name="website" type="text" placeholder="https://..." />
      </label>
      <label>
        github:
        <StyledInput name="github" type="text" placeholder="https://..." />
      </label>
      <label>
        codepen:
        <StyledInput name="codepen" type="text" placeholder="https://..." />
      </label>
    </div>
  )
}

const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
`
