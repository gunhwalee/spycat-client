import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const Aside = styled.aside`
  width: ${SIZE.SIDEBAR}px;
  height: 100%;
  padding: ${SIZE.PADDING}px;
  background-color: ${COLORS.SIDEBAR};
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: ${SIZE.FONT_BUTTON}px;
    font-weight: 400;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${SIZE.PADDING * 2}px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  font-size: ${SIZE.FONT_SMALL}px;
  color: ${COLORS.WHITE};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: ${SIZE.FONT_BUTTON}px;
  font-weight: 400;
`;
