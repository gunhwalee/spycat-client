import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLORS, SIZE } from "../assets/constants";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html,
  body,
  body > div {
    font-family: "Pretendard", sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 400px;
  height: 60px;
  background-color: ${COLORS.LOGIN};
  border: none;
  border-radius: ${SIZE.BORDER_RADIUS * 2}px;
  margin: ${SIZE.MARGIN * 4}px 0px;
  font-weight: 500;
  font-size: ${SIZE.FONT_REGULAR}px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkSpan = styled.span`
  color: ${COLORS.GRAY};
  font-size: ${SIZE.FONT_SMALL}px;
`;

export default GlobalStyles;
