import React from 'react'
import styled from 'styled-components/macro'

export default function FormProjectSection({ register }) {
  return (
    <StyledSection>
      <h3>
        <span>2</span>Linked Projects
      </h3>
      <label>
        <StyledInput
          ref={register()}
          name="capstoneLink"
          type="text"
          placeholder="Link your app here"
        />
      </label>
      <label>
        <StyledInput
          ref={register()}
          name="personalWebsite"
          type="text"
          placeholder="Link your personal-website here"
        />
      </label>
      <label>
        <StyledInput
          ref={register()}
          name="github"
          type="text"
          placeholder="Link your github here"
        />
      </label>
      <label>
        <StyledInput
          ref={register()}
          name="codepen"
          type="text"
          placeholder="Link your codepen here"
        />
      </label>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  h3 {
    margin-bottom: 30px;
  }

  span {
    background: var(--color-green);
    color: var(--background-white);
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 10px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 15px 15px 15px 0;
  }
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
