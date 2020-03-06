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
          <Icons src={companyIcon} alt="icon"></Icons>
          {company}
        </li>
        <li>
          <Icons src={countryIcon} alt="icon"></Icons>
          {country}
        </li>
        <li>
          <Icons src={emailIcon} alt="icon"></Icons>
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
            <Icons src={capstoneIcon} alt="icon"></Icons>
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
            <Icons src={capstoneIcon} alt="icon"></Icons>
            {capstoneName}
          </li>
        )}
        {personalWebsite ? (
          <li>
            <Icons src={personalWebsiteIcon} alt="icon"></Icons>
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
            <Icons src={githubIcon} alt="icon"></Icons>
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
            <Icons src={codepenIcon} alt="icon"></Icons>
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
const Icons = styled.img`
  display: inline-flex;
  align-self: center;
  vertical-align: middle;
  position: relative;
  margin-right: 20px;
`
