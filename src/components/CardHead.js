import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

CardHead.propTypes = {
  status: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function CardHead({ status, img, name, title }) {
  return (
    <StyledHead>
      <h3>{status}</h3>
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

  img {
    position: relative;
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    text-align: center;
    font-weight: normal;
  }

  h3 {
    align-self: flex-end;
    padding-right: 20px;
  }
`
