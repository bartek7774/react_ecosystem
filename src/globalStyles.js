import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 30px;
    padding: 50px;
    background-color: ${props=>props.theme.colors.back}
  }
  h1, h2, h3 {
    font-weight: normal;
    font-style: normal;
  }
`;