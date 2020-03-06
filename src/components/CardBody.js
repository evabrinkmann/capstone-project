import React from 'react'
import styled from 'styled-components/macro'
import companyIcon from '../icon/monitor.svg'
import countryIcon from '../icon/location.svg'
import emailIcon from '../icon/letter.svg'
import capstoneIcon from '../icon/cube.svg'
import personalWebsiteIcon from '../icon/world.svg'
import githubIcon from '../icon/github.svg'
import codepenIcon from '../icon/codepen.svg'
import PropTypes from 'prop-types'

CardBody.propTypes = {
  company: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  capstoneName: PropTypes.string.isRequired,
  capstoneLink: PropTypes.string,
  personalWebsite: PropTypes.string,
  github: PropTypes.string,
  codepen: PropTypes.string,
  skills: PropTypes.array,
}

export default function CardBody({
  company,
  country,
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
          <StyledIcons src={countryIcon}></StyledIcons>
          {country}
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
            {capstoneName}
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
        <span key={index}>{skill}</span>
      ))}
    </StyledBody>
  )

  function stopEventPropagation(event) {
    event.stopPropagation()
  }
}

const StyledBody = styled.section`
  background: #fff;
`
const StyledIcons = styled.img`
  display: inline-flex;
  align-self: center;
  vertical-align: middle;
  position: relative;
  margin-right: 20px;
`
