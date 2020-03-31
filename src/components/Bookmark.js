import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'

Bookmark.propTypes = {
  onBookmarkClick: PropTypes.func,
  id: PropTypes.string,
  bookmarkStatus: PropTypes.bool,
}

export default function Bookmark({ onBookmarkClick, id, bookmarkStatus }) {
  return (
    <Tooltip title="Add and remove favorite profiles" placement="bottom">
      <BookmarkStyled
        onClick={event => handleBookmarkClick(event)}
        active={bookmarkStatus}
      ></BookmarkStyled>
    </Tooltip>
  )

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick(id)
  }
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 15px solid
    ${props => (props.active ? 'var(--color-blue)' : '#e0c3c6')};
  border-bottom-color: whitesmoke;
  position: absolute;
  right: 24px;
  top: -8px;
  cursor: pointer;
`
