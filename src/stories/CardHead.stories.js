import React from 'react'
import CardHead from '../components/CardHead'
import userData from '../userData'

export default {
  title: 'components/CardHead',
  component: CardHead,
}
const { status, name, imgUrl, title } = userData[1]

export const User = () => (
  <CardHead status={status} title={title} img={imgUrl} name={name} />
)
