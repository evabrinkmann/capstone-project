import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import codepenIcon from '../icon/codepen.svg'
import capstoneIcon from '../icon/cube.svg'
import githubIcon from '../icon/github.svg'
import emailIcon from '../icon/letter.svg'
import locationIcon from '../icon/location.svg'
import companyIcon from '../icon/monitor.svg'
import personalWebsiteIcon from '../icon/world.svg'

CardBody.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  capstoneName: PropTypes.string,
  capstoneLink: PropTypes.string,
  personalWebsite: PropTypes.string,
  github: PropTypes.string,
  codepen: PropTypes.string,
  skills: PropTypes.array,
}

export default function CardBody({
  company,
  location,
  email,
  capstoneName,
  capstoneLink,
  personalWebsite,
  github,
  codepen,
  skills,
}) {
  return (
    <StyledBody>
      <hr />
      <ul>
        <li>
          <StyledIcons src={companyIcon}></StyledIcons>
          {company}
        </li>
        <li>
          <StyledIcons src={locationIcon}></StyledIcons>
          {location}
        </li>
        <li>
          <StyledIcons src={emailIcon}></StyledIcons>
          <a
            onClick={stopEventPropagation}
            href={`mailto:${email}`}
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
      <hr />
      <ul>
        {capstoneLink && capstoneName ? (
          <li>
            <StyledIcons src={capstoneIcon}></StyledIcons>
            <a
              onClick={stopEventPropagation}
              target="_blank"
              href={`${capstoneLink}`}
              rel="noopener noreferrer"
            >
              {capstoneName}
            </a>
          </li>
        ) : (
          <li>
            <StyledIcons src={capstoneIcon}></StyledIcons>
            {capstoneName || 'capstone project'}
          </li>
        )}
        {personalWebsite ? (
          <li>
            <StyledIcons src={personalWebsiteIcon}></StyledIcons>
            <a
              onClick={stopEventPropagation}
              target="_blank"
              href={`${personalWebsite}`}
              rel="noopener noreferrer"
            >
              personal-website
            </a>
          </li>
        ) : (
          ''
        )}
        {github ? (
          <li>
            <StyledIcons src={githubIcon}></StyledIcons>
            <a
              onClick={stopEventPropagation}
              target="_blank"
              href={`${github}`}
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
        ) : (
          ''
        )}
        {codepen ? (
          <li>
            <StyledIcons src={codepenIcon}></StyledIcons>
            <a
              onClick={stopEventPropagation}
              target="_blank"
              href={`${codepen}`}
              rel="noopener noreferrer"
            >
              codepen
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
      <hr />
      <h4>Skills</h4>
      {skills.map((skill, index) => (
        <StyledSkills key={index}>{skill}</StyledSkills>
      ))}
    </StyledBody>
  )

  function stopEventPropagation(event) {
    event.stopPropagation()
  }
}

const StyledBody = styled.section`
  background: white;

  hr {
    border: 0.5px solid var(--color-blue);
  }

  a {
    color: var(--color-blue);
    text-decoration: underline var(--color-blue);

    &:hover {
      color: var(--color-blue);
    }
  }

  ul {
    line-height: 2.2;
    list-style-type: none;
  }
`
const StyledIcons = styled.img`
  display: inline-flex;
  align-self: center;
  vertical-align: middle;
  position: relative;
  margin-right: 20px;
`
const StyledSkills = styled.span`
  display: inline-block;
  padding: 3px 6px;
  margin: 4px;
  border-radius: 15px;
  border: 1px solid var(--color-red);
  background: var(--color-red);
  opacity: 0.9;
  color: var(--background-white);
`
