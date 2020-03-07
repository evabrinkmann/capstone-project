import React from 'react'
import CardHead from '../components/CardHead'
import userData from '../userData'
import GlobalStyleStorybook from '../StorybookStyles'

export default {
  title: 'components/CardHead',
  component: CardHead,
  decorators: [
    storyFn => <GlobalStyleStorybook>{storyFn()}</GlobalStyleStorybook>,
  ],
}

const { status, name, imgUrl, title } = userData[1]

export const UserCardHead = () => (
  <CardHead status={status} title={title} img={imgUrl} name={name} />
)
