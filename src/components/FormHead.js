import React from 'react'
import styled from 'styled-components/macro'

export default function FormHead({ register }) {
  return (
    <StyledFormHead>
      <StyledCheckboxes>
        <div>
          <label>
            <input
              ref={register({ required: true })}
              name="status"
              value="alumni"
              type="radio"
            />
            alumni
          </label>
        </div>
        <div>
          <label>
            <input
              ref={register({ required: true })}
              name="status"
              value="newcomer"
              type="radio"
            />
            new
          </label>
        </div>
      </StyledCheckboxes>
      <h3>Name</h3>
      <label>
        *Your name:
        <StyledInput
          ref={register({ required: true })}
          name="name"
          type="text"
          placeholder="e.g. Max Mustermann"
        />
      </label>
      <label>
        *Your title:
        <StyledInput
          ref={register({ required: true })}
          name="title"
          type="text"
          placeholder="e.g. Web Developer"
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
