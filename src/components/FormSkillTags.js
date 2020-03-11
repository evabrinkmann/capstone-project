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

export default function FormSkillTags({ skills, onSkillChange }) {
  return (
    <StyledSkillTags>
      <h3>skills</h3>
      {skillTags.map(skill => (
        <label key={skill}>
          <input
            name="active"
            type="checkbox"
            value={skill}
            checked={skills.includes(skill)}
            onChange={event => onSkillChange(event.target.value)}
          />
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
