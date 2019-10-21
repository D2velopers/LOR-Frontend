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
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
  }
  input:focus{
    outline: none;
  }
`;
