import React from 'react'
import styled from 'styled-components/macro'

export default function FormProjectSection({ register }) {
  return (
    <div>
      <h3>Projects</h3>
      <label>
        *capstone project:
        <StyledInput
          ref={register()}
          name="capstoneName"
          type="text"
          placeholder="e.g. Recipe App, Language App etc."
        />
      </label>
      <label>
        capstone project Link:
        <StyledInput
          ref={register()}
          name="capstoneLink"
          type="text"
          placeholder="https://..."
        />
      </label>
      <label>
        personal-Website:
        <StyledInput
          ref={register()}
          name="personalWebsite"
          type="text"
          placeholder="https://..."
        />
      </label>
      <label>
        github:
        <StyledInput
          ref={register()}
          name="github"
          type="text"
          placeholder="https://..."
        />
      </label>
      <label>
        codepen:
        <StyledInput
          ref={register()}
          name="codepen"
          type="text"
          placeholder="https://..."
        />
      </label>
    </div>
  )
}

const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
`
