import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useToggle } from 'react-hooks-lib'
import deleteIcon from '../icon/trashIcon.png'
import { storage } from './firebase'
import { saveProfilesToLocal } from '../utils'
import uploadIcon from '../icon/addIcon-40.png'

CardHead.propTypes = {
  status: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  handleDelete: PropTypes.func,
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
  handleDelete,
  id,
  pathname,
  setProfiles,
  profiles,
}) {
  const { on, toggle } = useToggle(false)

  return (
    <StyledHead onClick={toggle}>
      <StatusStyled>{status}</StatusStyled>
      {on === false && pathname === '/profile-pool' && (
        <DeleteButton onClick={() => handleDelete(id)}>
          <img src={deleteIcon} alt="trashbox" />
        </DeleteButton>
      )}
      <UploadWrapper>
        <img src={img} alt="portrait" />
        {pathname === '/profile-pool' && (
          <UploadButton htmlFor="imageInput">
            <input
              type="file"
              name="image"
              id="imageInput"
              hidden="hidden"
              onChange={handleUpload}
            />
            <img src={uploadIcon} alt="plus-sign" />
          </UploadButton>
        )}
      </UploadWrapper>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </StyledHead>
  )

  function updateProfileImage(url) {
    const index = profiles.findIndex(profile => profile.id === id)
    const updatedProfile = { ...profiles[index], imgUrl: url }
    setProfiles([
      ...profiles.slice(0, index),
      updatedProfile,
      ...profiles.slice(index + 1),
    ])
    saveProfilesToLocal('profiles', profiles)
  }

  function handleUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`user-images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        storage
          .ref('user-images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            updateProfileImage(url)
          })
      }
    )
  }
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
    width: 200px;
    height: 200px;
    flex-direction: center;
    border-radius: 50%;
    object-fit: cover;
    cursor: default;
  }
  h1 {
    color: var(--color-blue);
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
  border: 1px solid var(--color-red);
  background: var(--color-red);
  opacity: 0.9;
  color: var(--background-white);
  cursor: default;
`
const DeleteButton = styled.span`
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
const UploadWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`

const UploadButton = styled.label`
  position: absolute;
  bottom: 12px;
  right: 15px;
  width: 35px;
  height: 35px;
  border: 3px solid white;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  display: flex;

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
    object-fit: cover;
    align-self: center;
    position: relative;
    right: 3px;
  }
`
