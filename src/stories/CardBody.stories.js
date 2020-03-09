import React from 'react'
import CardBody from '../components/CardBody'
import userData from '../userData'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'components/CardBody',
  component: CardBody,
  decorators: [
    storyFn => (
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    ),
  ],
}

const {
  company,
  country,
  email,
  capstoneName,
  capstoneLink,
  personalWebsite,
  github,
  codepen,
  skills,
} = userData[1]

export const UserCardBody = () => (
  <div style={{ width: '300px', height: '500px', margin: '20px' }}>
    <CardBody
      company={company}
      country={country}
      email={email}
      capstoneName={capstoneName}
      capstoneLink={capstoneLink}
      personalWebsite={personalWebsite}
      github={github}
      codepen={codepen}
      skills={skills}
    />
  </div>
)
