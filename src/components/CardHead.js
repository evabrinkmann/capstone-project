import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useToggle } from 'react-hooks-lib'
import deleteIcon from '../icon/trashIcon.png'
import { storage } from './firebase'
import { saveProfilesToLocal } from '../utils'

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
  setProfiles,
  profiles,
}) {
  const { on, toggle } = useToggle(false)
  const [image, setImage] = useState(null)

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

  function handleImageChange(event) {
    if (event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  function handleUpload() {
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
      <input type="file" name="image" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
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
