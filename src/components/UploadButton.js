import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import uploadIcon from '../icon/addIcon-40.png'
import { storage } from './firebase'
import { saveProfilesToLocal } from '../utils'

export default function UploadButton({ setProfiles, profiles, id }) {
  return (
    <UploadButtonStyled htmlFor="imageInput">
      <input
        type="file"
        name="image"
        id="imageInput"
        hidden="hidden"
        onChange={handleProfileImageUpload}
      />
      <Tooltip title="Edit profile picture" placement="right">
        <img className="upload-btn__image" src={uploadIcon} alt="plus-sign" />
      </Tooltip>
    </UploadButtonStyled>
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

  function handleProfileImageUpload(event) {
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

const UploadButtonStyled = styled.label`
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

  .upload-btn__image {
    width: 35px;
    height: 35px;
    cursor: pointer;
    object-fit: cover;
    align-self: center;
    position: relative;
    right: 3px;
  }
`
