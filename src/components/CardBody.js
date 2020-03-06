import React from 'react'
import styled from 'styled-components/macro'
import companyIcon from '../icon/monitor.svg'
import countryIcon from '../icon/location.svg'
import emailIcon from '../icon/letter.svg'
import capstoneIcon from '../icon/cube.svg'
import personalWebsiteIcon from '../icon/world.svg'
import githubIcon from '../icon/github.svg'
import codepenIcon from '../icon/codepen.svg'

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
          <img src={companyIcon} alt="icon"></img>
          {company}
        </li>
        <li>
          <img src={countryIcon} alt="icon"></img>
          {country}
        </li>
        <li>
          <img src={emailIcon} alt="icon"></img>
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
            <img src={capstoneIcon} alt="icon"></img>
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
            <img src={capstoneIcon} alt="icon"></img>
            {capstoneName}
          </li>
        )}
        {personalWebsite ? (
          <li>
            <img src={personalWebsiteIcon} alt="icon"></img>
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
            <img src={githubIcon} alt="icon"></img>
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
            <img src={codepenIcon} alt="icon"></img>
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
