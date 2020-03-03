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
            <li>{user.email}</li>
          </ul>
          <hr />
          <ul>
            <li>{user.capstoneProject}</li>
            <li>{user.personalWebsite}</li>
            <li>{user.github}</li>
            <li>{user.codepen}</li>
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
    text-decoration: none;
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
    width: 200px;
    height: 200px;
    flex-direction: center;
  }
`
