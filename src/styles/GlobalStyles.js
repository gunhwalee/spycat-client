import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  html, body, #root {
    height: 100%;
  }
  html,
  body,
  body > div {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #root {
    display: flex;
  }

  .logo-header {
    display: flex;
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 60px;

    > h1 {
      margin-left: 10px;
    }
  }
`;

export default GlobalStyles;
