import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100vh;
    background: #ccc;
  }

  a {
    text-decoration: none;
  }

`;
