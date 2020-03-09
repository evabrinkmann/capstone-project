import React from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'

export default function CreatePage() {
  return (
    <>
      <Header headerTitle="Create Profile" />
      <form style={{ marginTop: '100px' }}>
        <label>
          User Name
          <input autoFocus name="question" placeholder="What's your name?" />
        </label>
        <label>
          <div>Title</div>
          <input name="answer" placeholder="What's your title?" />
        </label>
        <button>Create card</button>
      </form>
    </>
  )
}
