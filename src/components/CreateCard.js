import React from 'react'
import styled from 'styled-components/macro'

export default function CreateCard() {
  return (
    <FormStyled>
      <label>
        alumni
        <input name="active" type="checkbox" />
      </label>
      <label>
        new
        <input name="active" type="checkbox" />
      </label>
      <br />
      <label>
        *
        <input name="firstName" type="text" placeholder="User name" />
      </label>
      <br />
      <label>
        Last Name *:
        <input name="lastName" type="text" />
      </label>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  margin: 100px 20px;
`
