import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import editIcon from '../icon/edit.png'

EditButton.propTypes = {
  handleOnClick: PropTypes.func,
}

export default function EditButton({ handleOnClick }) {
  return (
    <StyledEditButton onClick={handleOnClick}>
      <img className="edit-btn__image" src={editIcon} alt="pencil" />
    </StyledEditButton>
  )
}

const StyledEditButton = styled.span`
  position: absolute;
  bottom: -14px;
  right: 20px;

  .edit-btn__image {
    width: 23px;
    height: 23px;
    opacity: 0.8;
    cursor: pointer;
    border-radius: 0;
  }
`
