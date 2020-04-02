import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

FormSkillTags.propTypes = {
  register: PropTypes.func,
}

const skills = ['html5', 'css3', 'bootstrap', 'sass', 'javascript', 'react']

export default function FormSkillTags({ register }) {
  return (
    <StyledSkillTags>
      <h3>
        <span>3</span>Skills
      </h3>
      <Wrapper>
        {skills.map(skill => (
          <React.Fragment key={`fragment_${skill}`}>
            <InputTag
              ref={register()}
              type="checkbox"
              name="skills"
              value={skill}
              id={skill}
              key={`input_${skill}`}
            />
            <LabelTag key={skill} htmlFor={skill} data-cy="skills">
              {skill}
            </LabelTag>
          </React.Fragment>
        ))}
      </Wrapper>
    </StyledSkillTags>
  )
}

const StyledSkillTags = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

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
const Wrapper = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 100px 100px;
  gap: 20px;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  input:checked + label {
    background: linear-gradient(0.2turn, #1abc9c, #e8eeef, #fff);
  }
`

const InputTag = styled.input`
  display: none;
`
const LabelTag = styled.label`
  padding: 6px;
  margin: 0;
  background: linear-gradient(#e8eeef, #fff);
  color: #353b40;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  border-radius: 25px;
  text-align: center;
  width: 115px;
`
