import React from 'react'
import styled from 'styled-components/macro'

export default function FormSkillTags() {
  return (
    <StyledSkillTags>
      <h3>skills</h3>
      <label>
        <input name="active" type="checkbox" />
        html5
      </label>
      <label>
        <input name="active" type="checkbox" />
        css3
      </label>
      <label>
        <input name="active" type="checkbox" />
        bootstrap
      </label>
      <label>
        <input name="active" type="checkbox" />
        sass
      </label>
      <label>
        <input name="active" type="checkbox" />
        javascript
      </label>
      <label>
        <input name="active" type="checkbox" />
        react
      </label>
      <label>
        <input name="active" type="checkbox" />
        firebase
      </label>
      <label>
        <input name="active" type="checkbox" />
        node.js
      </label>
      <label>
        <input name="active" type="checkbox" />
        jest
      </label>
      <label>
        <input name="active" type="checkbox" />
        cypress
      </label>
    </StyledSkillTags>
  )
}

const StyledSkillTags = styled.div`
  display: flex;
  flex-direction: column;
`
