import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: sans-serif, Open Sans;
    font-size: 18px;
    line-height: 1.4;
    overflow-y: scroll;
    height: 100vh;
    width: 100vw;
    padding: 20px;
    
  }
 
`
