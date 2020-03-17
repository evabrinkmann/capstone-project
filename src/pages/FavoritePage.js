import React from 'react'
import Header from '../components/Header'
import Bookmark from '../components/Bookmark'
import CardBody from '../components/CardBody'
import styled from 'styled-components/macro'
import { useToggle } from 'react-hooks-lib'

export default function FavoritePage({ profiles, onBookmarkClick }) {
  const filterProfiles = profiles.filter(
    profile => profile.isBookmarked === true
  )
  const { on, toggle } = useToggle(false)

  return (
    <>
      <Header title="Favorite Profiles" />
      <Scroller>
        <StyledMain>
          {filterProfiles.length !== 0 ? (
            filterProfiles.map(profile => (
              <ProfileCardStyled onClick={toggle} key={profile.id}>
                <Bookmark
                  onBookmarkClick={onBookmarkClick}
                  id={profile.id}
                  bookmarkStatus={profile.isBookmarked}
                />
                <StyledHead>
                  <StatusStyled>{profile.status}</StatusStyled>

                  <img src={profile.imgUrl} alt="portrait" />
                  <h1>{profile.name}</h1>
                  <h2>{profile.title}</h2>
                </StyledHead>
                {on && (
                  <CardBody
                    company={profile.company}
                    location={profile.location}
                    email={profile.email}
                    capstoneName={profile.capstoneName}
                    capstoneLink={profile.capstoneLink}
                    personalWebsite={profile.personalWebsite}
                    github={profile.github}
                    codepen={profile.codepen}
                    skills={profile.skills}
                  />
                )}
              </ProfileCardStyled>
            ))
          ) : (
            <p>Select your favorite profiles</p>
          )}
        </StyledMain>
      </Scroller>
    </>
  )
}
const Scroller = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
`
const ProfileCardStyled = styled.article`
  padding: 20px;
  margin: 10px 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;
  position: relative;
`
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 70px 10px 30px;
`

const StyledHead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: normal;
  position: relative;

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
`
const StatusStyled = styled.span`
  align-self: flex-start;
  margin: 20px 20px 35px;
  font-weight: bold;
  display: inline-block;
  padding: 0 7px;
  border-radius: 15px;
  border: 1px solid #e53a1e;
  background: #e53a1e;
  opacity: 0.9;
  color: #fff;
`
