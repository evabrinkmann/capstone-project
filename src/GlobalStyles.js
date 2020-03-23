import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--body-background);
    font-family: sans-serif, Open Sans;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
    width: 100vw;
  }

  input {
    font-size: 1em;
  }

  :root {
    --color-blue: #549dd8;
    --color-red: #e53a1e;
    --body-background: #EEE;
    --color-green: #1abc9c;
    --color-lightGreen: #f4f7f8;
    --background-white: #FFF;
  }
`
