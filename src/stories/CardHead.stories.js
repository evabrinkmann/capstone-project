import React from 'react'
import CardHead from '../components/CardHead'
import userData from '../userData'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'components/CardHead',
  component: CardHead,
  decorators: [
    storyFn => (
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    ),
  ],
}

const { status, name, imgUrl, title } = userData[1]

export const UserCardHead = () => (
  <div style={{ width: '300px', height: '500px' }}>
    <CardHead status={status} title={title} img={imgUrl} name={name} />
  </div>
)
