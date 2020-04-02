import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import UploadButton from './UploadButton'

CardHead.propTypes = {
  status: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  handleDeleteCard: PropTypes.func,
  id: PropTypes.string,
  pathname: PropTypes.string,
  setProfiles: PropTypes.func,
  profiles: PropTypes.array,
}

export default function CardHead({
  status,
  img,
  name,
  title,
  handleDeleteCard,
  id,
  pathname,
  setProfiles,
  profiles,
}) {
  const { on, toggle } = useToggle(false)
  const history = useHistory()

  return (
    <StyledHead onClick={toggle}>
      <StatusStyled>{status}</StatusStyled>
      {on === false && pathname === '/profile-pool' && (
        <DeleteButton handleOnClick={() => handleDeleteCard(id)} />
      )}
      {on === false && pathname === '/profile-pool' && (
        <EditButton handleOnClick={() => history.push('/edit-profile/' + id)} />
      )}
      <UploadWrapper>
        <img className="profile-img__image" src={img} alt="portrait" />
        {pathname === '/profile-pool' && (
          <UploadButton setProfiles={setProfiles} profiles={profiles} id={id} />
        )}
      </UploadWrapper>
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

  .profile-img__image {
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
    cursor: default;
    box-shadow: 0 5px 14px grey;
  }
  h1 {
    color: var(--color-blue);
  }
  h2 {
    text-align: center;
    font-weight: normal;
    margin: 0 10px 30px;
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
  border: 1px solid var(--color-red);
  background: var(--color-red);
  opacity: 0.9;
  color: var(--background-white);
  cursor: default;
  box-shadow: 1px 4px 2px grey;
`

const UploadWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`
