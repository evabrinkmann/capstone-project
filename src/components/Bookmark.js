import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ onBookmarkClick, id, bookmarkStatus }) {
  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick(id)
  }

  return (
    <BookmarkStyled
      onClick={event => handleBookmarkClick(event)}
      active={bookmarkStatus}
    ></BookmarkStyled>
  )
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 14px solid ${props => (props.active ? '#549dd8' : '#e0c3c6')};
  border-bottom-color: white;
  position: absolute;
  right: 24px;
  top: -8px;
  cursor: pointer;
`
