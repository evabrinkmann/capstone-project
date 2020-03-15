import React from 'react'
import FormRadioButton from './FormRadioButton'

export default {
  title: 'components/Input/Radio Button',
  component: FormRadioButton,
}

const register = () => {}
export const RadioButton = () => (
  <div
    style={{
      width: '400px',
      height: '200px',
      background: 'white',
    }}
  >
    <FormRadioButton register={register} />
  </div>
)
