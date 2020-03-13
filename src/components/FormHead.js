import React from 'react'
import styled from 'styled-components/macro'

export default function FormHead({ register }) {
  return (
    <StyledFormHead>
      <h3>
        <span>1</span>User Info
      </h3>
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

const StyledCheckboxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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
