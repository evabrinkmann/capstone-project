import React from 'react'
import styled from 'styled-components'
import CardHead from './CardHead'
import CardBody from './CardBody'

export default function CardSingle({ user, setActiveCard, isActive }) {
  function activeCard() {
    if (!isActive) {
      setActiveCard(user.id)
    } else {
      setActiveCard('')
    }
  }

  return (
    <>
      <ProfileCard onClick={() => activeCard()}>
        <h3>{user.status}</h3>
        <CardHead img={user.imgUrl} name={user.name} title={user.title} />

        {isActive && (
          <CardBody
            company={user.company}
            country={user.country}
            email={user.email}
            capstoneName={user.capstoneName}
            capstoneLink={user.capstoneLink}
            personalWebsite={user.personalWebsite}
            github={user.github}
            codepen={user.codepen}
            skills={user.skills}
          />
        )}
      </ProfileCard>
    </>
  )
}

const ProfileCard = styled.article`
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;

  h2 {
    text-align: center;
    font-weight: normal;
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
