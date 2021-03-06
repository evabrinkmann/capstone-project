import React from 'react'
import CardHead from './CardHead'
import userData from '../userData'

export default {
  title: 'components/CardHead',
  component: CardHead,
  decorators: [renderCardHead => <div>{renderCardHead()}</div>],
}

const { status, name, imgUrl, title } = userData[1]

export const UserCardHead = () => (
  <div style={{ width: '300px', height: '500px' }}>
    <CardHead status={status} title={title} img={imgUrl} name={name} />
  </div>
)
