import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }: any) => theme.color.black60};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.large};
}  

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

html {
  height: 100%;
}

#root {
  height: 100%;
}

.react-search-field-input {
  height: auto !important;
}
.react-search-field-button {
  height: auto !important;
}

ul {
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
}
li {
  margin: 0 4px;
  display: inline-block;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
}
.active {
  text-decoration: underline;
}
.slick-slider {
    left: 25%;
    width: 50%;
    height: 300px;
  }
`;
