import React from 'react'
import DeleteButton from './DeleteButton'

export default {
  title: 'components/DeleteButton',
  component: DeleteButton,
}

export const DefaultDeleteButton = () => (
  <div style={{ width: '30px', height: '50px', position: 'relative' }}>
    <DeleteButton />
  </div>
)
