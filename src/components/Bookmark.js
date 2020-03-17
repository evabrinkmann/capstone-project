import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ onBookmarkClick, id, bookmarkStatus }) {
  return (
    <BookmarkStyled
      onClick={() => onBookmarkClick(id)}
      active={bookmarkStatus}
    ></BookmarkStyled>
  )
}

const BookmarkStyled = styled.button`
  height: 33px;
  padding: 0;
  outline: 0;
  border: 13px solid ${props => (props.active ? 'hotpink' : '#e0c3c6')};
  border-bottom-color: white;
  position: absolute;
  right: 40px;
  top: -5px;
`
