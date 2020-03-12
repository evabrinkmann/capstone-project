import React from 'react'
import styled from 'styled-components/macro'

const skillTags = [
  'html5',
  'css3',
  'bootstrap',
  'sass',
  'javascript',
  'firebase',
]

export default function FormSkillTags({ register }) {
  return (
    <StyledSkillTags>
      <h3>skills</h3>
      {skillTags.map(skill => (
        <label key={skill}>
          <input ref={register()} name="skills" type="checkbox" value={skill} />
          {skill}
        </label>
      ))}
    </StyledSkillTags>
  )
}

const StyledSkillTags = styled.div`
  display: flex;
  flex-direction: column;
`
