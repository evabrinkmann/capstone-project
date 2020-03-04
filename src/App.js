import React from 'react'
import styled from 'styled-components'
import monitorIcon from './icon/monitor.svg'
import locationIcon from './icon/location.svg'
import letterIcon from './icon/letter.svg'
import cubeIcon from './icon/cube.svg'
import worldIcon from './icon/world.svg'
import githubIcon from './icon/github.svg'
import codepenIcon from './icon/codepen.svg'

import userData from './userData'

export default function App() {
  return (
    <>
      {userData.map(user => (
        <ProfileCard>
          <h3>{user.status}</h3>
          <ProfileHead>
            <img src={user.imgUrl} alt="portrait" />
            <h1>{user.name}</h1>
            <h2>{user.title}</h2>
          </ProfileHead>
          <hr />
          <ul>
            <li>
              <img src={monitorIcon} alt="icon"></img>

              {user.company}
            </li>

            <li>
              <img src={locationIcon} alt="icon"></img>

              {user.country}
            </li>
            <li>
              <img src={letterIcon} alt="icon"></img>
              <a href={`mailto:${user.email}`} rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            {user.capstoneLink && user.capstoneName ? (
              <li>
                <img src={cubeIcon} alt="icon"></img>
                <a
                  target="_blank"
                  href={`${user.capstoneLink}`}
                  rel="noopener noreferrer"
                >
                  {user.capstoneName}
                </a>
              </li>
            ) : (
              <li>
                <img src={cubeIcon} alt="icon"></img>
                {user.capstoneName}
              </li>
            )}
            {user.personalWebsite ? (
              <li>
                <img src={worldIcon} alt="icon"></img>
                <a
                  target="_blank"
                  href={`${user.personalWebsite}`}
                  rel="noopener noreferrer"
                >
                  personal-website
                </a>
              </li>
            ) : (
              ''
            )}
            {user.github ? (
              <li>
                <img src={githubIcon} alt="icon"></img>
                <a
                  target="_blank"
                  href={`${user.github}`}
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
            ) : (
              ''
            )}
            {user.codepen ? (
              <li>
                <img src={codepenIcon} alt="icon"></img>
                <a
                  target="_blank"
                  href={`${user.codepen}`}
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
          {user.skills.map(skill => (
            <span>{skill}</span>
          ))}
        </ProfileCard>
      ))}
    </>
  )
}

const ProfileCard = styled.section`
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;

  h2 {
    text-align: center;
  }

  h3 {
    text-align: end;
    padding-right: 20px;
  }

  hr {
    border: 0.5px solid #549dd8;
  }

  a {
    color: black;
  }

  img {
    display: inline-flex;
    align-self: center;
    vertical-align: middle;
    position: relative;
    margin-right: 20px;
  }

  ul {
    line-height: 2.2;
    list-style-type: none;
  }

  li {
    list-style-type: none;
  }

  span {
    display: inline-block;
    padding: 3px 6px;
    margin: 4px;
    border-radius: 15px;
    border: 1px solid #e53a1e;
    background: #e53a1e;
    opacity: 0.9;
    color: #fff;
  }
`
const ProfileHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: normal;
  img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
  }
`
