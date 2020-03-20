import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useToggle } from 'react-hooks-lib'
import deleteIcon from '../icon/trashIcon.png'

CardHead.propTypes = {
  status: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}

export default function CardHead({
  status,
  img,
  name,
  title,
  handleDelete,
  id,
  pathname,
}) {
  const { on, toggle } = useToggle(false)

  return (
    <StyledHead onClick={toggle}>
      <StatusStyled>{status}</StatusStyled>
      {on === false
        ? pathname === '/profile-pool' && (
            <DeleteSign onClick={() => handleDelete(id)}>
              <img src={deleteIcon} alt="trashbox" />
            </DeleteSign>
          )
        : ''}
      <img src={img} alt="portrait" />
      <h1>{name}</h1>
      <h2>{title}</h2>
    </StyledHead>
  )
}

const StyledHead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: normal;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
    cursor: default;
  }
  h1 {
    color: #549dd8;
  }
  h2 {
    text-align: center;
    font-weight: normal;
    margin: 10px;
    font-size: 24px;
  }
`
const StatusStyled = styled.span`
  align-self: flex-start;
  margin: -1px -1px 30px;
  font-weight: bold;
  display: inline-block;
  padding: 0 7px;
  border-radius: 15px;
  border: 1px solid #e53a1e;
  background: #e53a1e;
  opacity: 0.9;
  color: #fff;
  cursor: default;
`
const DeleteSign = styled.span`
  position: absolute;
  bottom: -15px;
  right: -10px;

  img {
    width: 25px;
    height: 25px;
    opacity: 0.7;
    cursor: pointer;
  }
`
