import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

FormContactSection.propTypes = {
  register: PropTypes.func,
}

export default function FormContactSection({ register }) {
  return (
    <div>
      <label>
        <StyledInput
          ref={register({ required: true })}
          name="company"
          type="text"
          placeholder="Your workplace *"
        />
      </label>
      <label>
        <StyledInput
          ref={register({ required: true })}
          name="location"
          type="text"
          placeholder="Your location *"
        />
      </label>
      <label>
        <StyledInput
          ref={register({ required: true })}
          name="email"
          type="text"
          placeholder="Your email *"
        />
      </label>
      <label>
        <StyledInput
          ref={register()}
          name="capstoneName"
          type="text"
          placeholder="Your app"
        />
      </label>
    </div>
  )
}

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
