import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import deleteIcon from '../icon/trashIcon.png'

DeleteButton.propTypes = {
  handleOnClick: PropTypes.func,
}

export default function DeleteButton({ handleOnClick }) {
  return (
    <DeleteButtonStyled onClick={handleOnClick}>
      <Tooltip title="Delete card" placement="left">
        <img className="delete-btn__image" src={deleteIcon} alt="trashbox" />
      </Tooltip>
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.span`
  position: absolute;
  bottom: -15px;
  right: -10px;

  .delete-btn__image {
    width: 25px;
    height: 25px;
    opacity: 0.8;
    cursor: pointer;
  }
`
