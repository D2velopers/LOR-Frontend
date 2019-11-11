import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+JP|Noto+Sans+KR&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.colors.light.bg};
    font-size: 14px;
    line-height: 1;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .1) 0 0 1px;
    font-weight: 400;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
  }
  input:focus {
    outline: none;
  }
  button:focus {
    outline: none;
  }
`;
