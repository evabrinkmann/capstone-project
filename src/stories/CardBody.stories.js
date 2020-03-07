import React from 'react'
import CardBody from '../components/CardBody'
import userData from '../userData'
import GlobalStyleStorybook from '../StorybookStyles'

export default {
  title: 'components/CardBody',
  component: CardBody,
  decorators: [
    storyFn => <GlobalStyleStorybook>{storyFn()}</GlobalStyleStorybook>,
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
  <div style={{ width: '300px' }}>
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
