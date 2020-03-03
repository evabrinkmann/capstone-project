import React from 'react'
import styled from 'styled-components'

import userData from './userData'

export default function App() {
  return (
    <>
      {userData.map(user => (
        <ProfileCard>
          <h3>{user.status}</h3>
          <ProfileHead>
            <img src={user.imgUrl} alt="portrait" />
            <h1>{user.name}</h1>
            <h2>{user.title}</h2>
          </ProfileHead>
          <hr />
          <ul>
            <li>
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 22 22"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="alumni-app"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="profile-card"
                    transform="translate(-52.000000, -452.000000)"
                    stroke="#549CD8"
                    stroke-width="2"
                  >
                    <g id="Group" transform="translate(53.000000, 453.000000)">
                      <g id="ICO/general/monitor">
                        <rect
                          id="Rectangle-path"
                          x="0"
                          y="0"
                          width="20"
                          height="15.4736842"
                          rx="2"
                        />
                        <line
                          x1="6"
                          y1="19.8947368"
                          x2="14"
                          y2="19.8947368"
                          id="Shape"
                        />
                        <line
                          x1="10"
                          y1="15.4736842"
                          x2="10"
                          y2="19.8947368"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              {user.company}
            </li>

            <li>
              <svg
                width="23px"
                height="29px"
                viewBox="0 0 23 29"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="alumni-app"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="profile-card"
                    transform="translate(-52.000000, -498.000000)"
                    stroke="#549DD8"
                    stroke-width="2"
                  >
                    <g id="Group" transform="translate(53.000000, 453.000000)">
                      <g
                        id="Group-7"
                        transform="translate(0.000000, 46.386364)"
                      >
                        <path
                          d="M21,10.5433883 C21,18.7438016 10.5,25.7727273 10.5,25.7727273 C10.5,25.7727273 0,18.7438016 0,10.5433883 C0,4.72043572 4.70101019,8.10945514e-15 10.5,8.10945514e-15 C16.2989898,8.10945514e-15 21,4.72043572 21,10.5433883 L21,10.5433883 Z"
                          id="Shape"
                        />
                        <circle
                          id="Oval"
                          cx="10.5"
                          cy="11.0602767"
                          r="3.19565217"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {user.country}
            </li>
            <li>
              <svg
                width="24px"
                height="23px"
                viewBox="0 0 24 23"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="alumni-app"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="profile-card"
                    transform="translate(-52.000000, -554.000000)"
                    stroke="#549DD8"
                    stroke-width="2"
                  >
                    <g id="Group" transform="translate(53.000000, 453.000000)">
                      <g
                        id="ICO/gerenal/letter"
                        transform="translate(0.000000, 102.000000)"
                      >
                        <path
                          d="M2.2,0 L19.8,0 C21.01,0 22,1.18125 22,2.625 L22,18.375 C22,19.81875 21.01,21 19.8,21 L2.2,21 C0.99,21 0,19.81875 0,18.375 L0,2.625 C0,1.18125 0.99,0 2.2,0 Z"
                          id="Shape"
                        />
                        <polyline
                          id="Shape"
                          points="22 2.625 11 11.8125 0 2.625"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <a href={`mailto:${user.email}`} rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            {user.capstoneLink ? (
              <li>
                <a
                  target="_blank"
                  href={`${user.capstoneLink}`}
                  rel="noopener noreferrer"
                >
                  {user.capstoneName}
                </a>
              </li>
            ) : (
              <li>{user.capstoneName}</li> || ''
            )}
            {user.personalWebsite ? (
              <li>
                <a
                  target="_blank"
                  href={`${user.personalWebsite}`}
                  rel="noopener noreferrer"
                >
                  personal-website
                </a>
              </li>
            ) : (
              ''
            )}
            {user.github ? (
              <li>
                <a
                  target="_blank"
                  href={`${user.github}`}
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
            ) : (
              ''
            )}
            {user.codepen ? (
              <li>
                <a
                  target="_blank"
                  href={`${user.codepen}`}
                  rel="noopener noreferrer"
                >
                  codepen
                </a>
              </li>
            ) : (
              ''
            )}
          </ul>
          <hr />
          <h4>Skills</h4>
          {user.skills.map(skill => (
            <button>{skill}</button>
          ))}
        </ProfileCard>
      ))}
    </>
  )
}

const ProfileCard = styled.section`
  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow-wrap: break-word;

  h2 {
    text-align: center;
  }

  h3 {
    text-align: end;
    padding-right: 20px;
  }

  a {
    color: black;
  }

  svg {
    display: inline-flex;
    align-self: center;
    height: 1em;
    width: 1em;
    top: 0.125em;
    position: relative;
    margin-right: 20px;
  }

  ul {
    line-height: 2.2;
    list-style-type: none;
  }

  li {
    list-style-type: none;
  }

  button {
    margin: 2px;
  }
`
const ProfileHead = styled.div`
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
`
