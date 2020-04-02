import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components/macro'
import defaultImageSrc from '../imgsrc/defaultProfileImg.png'
import Bookmark from './Bookmark'
import CardBody from './CardBody'
import CardHead from './CardHead'

Card.propTypes = {
  user: PropTypes.object,
  onDeleteCard: PropTypes.func,
  id: PropTypes.string,
  handleBookmarkClick: PropTypes.func,
  isBookmarked: PropTypes.bool,
  pathname: PropTypes.string,
  setProfiles: PropTypes.func,
  profiles: PropTypes.array,
}

export default function Card({
  user,
  onDeleteCard,
  id,
  handleBookmarkClick,
  isBookmarked,
  pathname,
  setProfiles,
  profiles,
}) {
  const { on, toggle } = useToggle(false)
  return (
    <ProfileCardStyled data-cy="cardhead" onClick={toggle}>
      <Bookmark
        onBookmarkClick={handleBookmarkClick}
        id={id}
        bookmarkStatus={isBookmarked}
        pathname={pathname}
      />
      <CardHead
        handleDeleteCard={onDeleteCard}
        status={user.status}
        img={user.imgUrl || defaultImageSrc}
        name={user.name}
        title={user.title}
        id={id}
        pathname={pathname}
        setProfiles={setProfiles}
        profiles={profiles}
      />
      {on && (
        <CardBody
          data-cy="cardbody"
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
  )
}

const ProfileCardStyled = styled.article`
  padding: 20px;
  margin: 30px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;
  position: relative;
`
