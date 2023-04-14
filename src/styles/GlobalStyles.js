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

  html,
  body,
  body > div {
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    display: flex;
  }

  .big-logo-header {
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .small-logo-header {
    height: 60px;
    padding: 10px;
  }
`;

export default GlobalStyles;
