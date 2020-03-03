import React from 'react'
import styled from 'styled-components'

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
            <li>{user.company}</li>
            <li>{user.country}</li>
            <li>
              <a href={`mailto:${user.email}`} rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            {user.capstoneLink ? (
              <li>
                <a
                  target="_blank"
                  href={`${user.capstoneLink}`}
                  rel="noopener noreferrer"
                >
                  {user.capstoneName}
                </a>
              </li>
            ) : (
              user.capstoneName
            )}
            {user.personalWebsite ? (
              <li>
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
            <button>{skill}</button>
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

  h3 {
    text-align: end;
    padding-right: 20px;
  }

  a {
    color: black;
  }

  button {
    margin: 2px;
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
    width: 100%;
    height: 300px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
  }
`
