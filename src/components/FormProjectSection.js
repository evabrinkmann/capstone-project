import React from 'react'
import styled from 'styled-components/macro'

export default function FormProjectSection({
  capstoneName,
  onCapstoneNameChange,
  capstoneLink,
  onCapstoneLinkChange,
  personalWebsite,
  onPersonalWebsiteChange,
  github,
  onGithubChange,
  codepen,
  onCodepenChange,
}) {
  return (
    <div>
      <h3>Projects</h3>
      <label>
        *capstone project:
        <StyledInput
          name="capstoneName"
          type="text"
          placeholder="e.g. Recipe App, Language App etc."
          value={capstoneName}
          onChange={event => onCapstoneNameChange(event.target.value)}
        />
      </label>
      <label>
        capstone project Link:
        <StyledInput
          name="capstoneLink"
          type="text"
          placeholder="https://..."
          value={capstoneLink}
          onChange={event => onCapstoneLinkChange(event.target.value)}
        />
      </label>
      <label>
        personal-Website:
        <StyledInput
          name="website"
          type="text"
          placeholder="https://..."
          value={personalWebsite}
          onChange={event => onPersonalWebsiteChange(event.target.value)}
        />
      </label>
      <label>
        github:
        <StyledInput
          name="github"
          type="text"
          placeholder="https://..."
          value={github}
          onChange={event => onGithubChange(event.target.value)}
        />
      </label>
      <label>
        codepen:
        <StyledInput
          name="codepen"
          type="text"
          placeholder="https://..."
          value={codepen}
          onChange={event => onCodepenChange(event.target.value)}
        />
      </label>
    </div>
  )
}

const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
`
