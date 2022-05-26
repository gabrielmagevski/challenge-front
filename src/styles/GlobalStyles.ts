import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Montserrat', sans-serif;
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
}
`;
