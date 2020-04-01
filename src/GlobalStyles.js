import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif, Open Sans;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
    width: 100vw;
    background-color: #2196F3;
    background-image: linear-gradient(315deg,#c9e7ff -29%,#80c7ff 50%,#c9e7ff 74%);
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
