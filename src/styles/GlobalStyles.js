import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { SIZE } from "../assets/constants";

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
    margin: ${SIZE.MARGIN * 10}px 0px ${SIZE.MARGIN * 5}px;
  }
`;

export default GlobalStyles;
