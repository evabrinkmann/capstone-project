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
      <h3>
        <span>3</span>skills
      </h3>
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
  margin-bottom: 20px;

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
