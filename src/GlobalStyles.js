import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #EEE;
    font-family: sans-serif, Open Sans;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
    width: 100vw;
  }

  input {
    font-size: 1em;
  }
`
