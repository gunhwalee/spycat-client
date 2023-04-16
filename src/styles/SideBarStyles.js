import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const Aside = styled.aside`
  width: 150px;
  min-width: 150px;
  padding: ${SIZE.PADDING}px;
  background-color: ${COLORS.SIDEBAR};
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${SIZE.FONT_REGULAR}px;
`;

export const List = styled.div`
  font-size: ${SIZE.FONT_REGULAR}px;
  display: flex;
  align-items: center;
  padding-bottom: ${SIZE.PADDING * 2}px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE.MARGIN / 2}px;
`;

export const Button = styled.button`
  font-size: ${SIZE.FONT_SMALL}px;
  color: ${COLORS.WHITE};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const DropDown = styled.ul`
  margin-bottom: ${SIZE.MARGIN * 2}px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const DropDownList = styled.li`
  margin: ${SIZE.MARGIN}px;
  font-size: ${SIZE.FONT_NORMAL}px;
`;
