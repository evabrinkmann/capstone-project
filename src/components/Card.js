import React from 'react'
import styled from 'styled-components/macro'
import CardHead from './CardHead'
import CardBody from './CardBody'
import PropTypes from 'prop-types'

Card.propTypes = {
  user: PropTypes.object,
  setActiveCard: PropTypes.func,
  isActive: PropTypes.bool,
}

export default function Card({ user, setActiveCard, isActive }) {
  function activeCard() {
    if (!isActive) {
      setActiveCard(user.id)
    } else {
      setActiveCard('')
    }
  }

  return (
    <>
      <ProfileCardStyled onClick={() => activeCard()}>
        <CardHead
          status={user.status}
          img={user.imgUrl}
          name={user.name}
          title={user.title}
        />

        {isActive && (
          <CardBody
            company={user.company}
            location={user.location}
            email={user.email}
            capstoneName={user.capstoneName}
            capstoneLink={user.capstoneLink}
            personalWebsite={user.personalWebsite}
            github={user.github}
            codepen={user.codepen}
            skills={user.skills}
          />
        )}
      </ProfileCardStyled>
    </>
  )
}

const ProfileCardStyled = styled.article`
  padding: 20px;
  margin: 10px 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;
`
