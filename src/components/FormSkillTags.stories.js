import React from 'react'
import FormSkillTags from './FormSkillTags'

export default {
  title: 'components/Input/Skill Tags',
  component: FormSkillTags,
}
const register = () => {}
export const SkillTags = () => (
  <div style={{ width: '400px', height: '700px' }}>
    <FormSkillTags register={register} />
  </div>
)
