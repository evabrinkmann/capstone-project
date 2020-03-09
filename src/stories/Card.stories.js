import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components/macro'
import userData from '../userData'
//import GlobalStyleStorybook from '../StorybookStyles'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [
    storyFn => (
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    ),
  ],
}

export const ProfileCardActive = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <Card user={userData[1]} setActiveCard={() => {}} isActive={true} />
  </div>
)

export const ProfileCardNotActive = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <Card user={userData[1]} setActiveCard={() => {}} isActive={false} />
  </div>
)
