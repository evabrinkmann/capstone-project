import React from 'react'
import styled from 'styled-components/macro'

export default function FormContactSection() {
  return (
    <div>
      <StyledContactSection>
        <h3>Contact</h3>
        <label>
          *company:
          <StyledInput
            name="company"
            type="text"
            placeholder="e.g. neuefische GmbH"
          />
        </label>
        <label>
          *location:
          <StyledInput
            name="location"
            type="text"
            placeholder="e.g. Hamburg, Germany"
          />
        </label>
        <label>
          *Your e-mail:
          <StyledInput
            name="e-mail"
            type="text"
            placeholder="e.g. Web Developer"
          />
        </label>
      </StyledContactSection>
    </div>
  )
}

const StyledContactSection = styled.section`
  margin-bottom: 50px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
`
