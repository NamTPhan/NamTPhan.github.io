import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background: ${props => props.theme.body};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
