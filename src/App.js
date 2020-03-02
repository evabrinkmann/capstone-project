import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import userData from './userData'
import imgNatalie from './img/natalie.jpg'

export default function App() {
  const userData = [
    {
      status: 'alumni',
      imgUrl: 'http://source.unsplash.com/random/?portrait',
      name: 'Natalie Fuchs',
      title: 'Frontend Developer',
      company: 'Argonauten GmbH',
      country: 'Hamburg, Germany',
      email: 'natalie.fuchs@argonauten.de',
      capstoneProject: 'Stadt, Land, Fuchs',
      personalWebsite: 'personal-website',
      github: 'github',
      codepen: 'codepen',
      skills: ['react', 'html', 'css', 'sass', 'bootstrap', 'javascript'],
    },
  ]
  return (
    <div>
      {userData.map(user => (
        <ProfileContainer>
          <Status>{user.status}</Status>
          <ProfileHead>
            <img src={user.imgUrl} alt="portrait" />
            <h1>{user.name}</h1>
            <h2>{user.title}</h2>
          </ProfileHead>
          <hr />
          <p>{user.company}</p>
          <p>{user.country}</p>
          <p>{user.email}</p>
          <hr />
          <p>{user.capstoneProject}</p>
          <p>{user.personalWebsite}</p>
          <p>{user.github}</p>
          <p>{user.codepen}</p>
          <hr />
          <h3>Skills</h3>
          {user.skills.map(skill => (
            <button>{skill}</button>
          ))}
        </ProfileContainer>
      ))}
    </div>
  )
}

const ProfileContainer = styled.section`
  font-family: 'Open Sans';
  width: 350px;
  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
`
const ProfileHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-direction: center;
    align-item: center;
  }
`

const Status = styled.h3`
  text-align: end;
  padding-right: 20px;
`
