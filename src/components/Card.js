import React from 'react'
import styled from 'styled-components/macro'
import CardHead from './CardHead'
import CardBody from './CardBody'
import PropTypes from 'prop-types'
import defaultImageSrc from '../imgsrc/unknownProfileImg.png'
import Bookmark from './Bookmark'
import { useToggle } from 'react-hooks-lib'

Card.propTypes = {
  user: PropTypes.object,
  setActiveCard: PropTypes.func,
  isActive: PropTypes.bool,
}

export default function Card({
  user,
  onDelete,
  id,
  handleBookmarkClick,
  isBookmarked,
  pathname,
}) {
  const { on, toggle } = useToggle(false)
  return (
    <ProfileCardStyled onClick={toggle}>
      <Bookmark
        onBookmarkClick={handleBookmarkClick}
        id={id}
        bookmarkStatus={isBookmarked}
      />
      <CardHead
        handleDelete={onDelete}
        key={user.id}
        status={user.status}
        img={user.imgUrl || defaultImageSrc}
        name={user.name}
        title={user.title}
        id={id}
        pathname={pathname}
      />
      {on && (
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
