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
  font-size: ${SIZE.FONT_NORMAL}px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: ${SIZE.PADDING * 2}px 0px;
  cursor: pointer;

  &.namemenu {
    justify-content: space-between;
    border-bottom: 2px solid ${COLORS.VIEW_BACKGROUND};
  }
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
  position: absolute;
  width: 130px;
  background-color: ${COLORS.VIEW_BACKGROUND};
  margin-bottom: ${SIZE.MARGIN * 2}px;
  display: flex;
  z-index: 999;
  flex-direction: column;
  align-items: baseline;
  border-bottom-left-radius: ${SIZE.BORDER_RADIUS}px;
  border-bottom-right-radius: ${SIZE.BORDER_RADIUS}px;

  a {
    width: 100%;
  }

  a:hover {
    background-color: ${COLORS.BACKGROUND};
  }
`;

export const DropDownList = styled.li`
  font-size: ${SIZE.FONT_SMALL}px;
  margin: ${SIZE.MARGIN}px ${SIZE.MARGIN}px;

  :hover {
    background-color: ${COLORS.BACKGROUND};
  }
`;
