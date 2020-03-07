import React from 'react'

const BodyStyle = {
  margin: 0,
  background: '#EEE',
  fontFamily: 'sans-serif, Open Sans',
  fontSize: '18px',
  lineHeight: 1.4,
  overflowY: 'scroll',
  height: '100vh',
  width: '100vw',
}

const GlobalStyleStorybook = ({ children }) => (
  <div style={BodyStyle}>{children}</div>
)
export default GlobalStyleStorybook
