import styled from "styled-components";
import { COLORS, SIZE, TIME } from "../assets/constants";

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

export const Header = styled.header`
  font-size: ${SIZE.FONT_NORMAL}px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: ${SIZE.PADDING * 2}px 0px;
  cursor: pointer;
`;
export const List = styled.li`
  font-size: ${SIZE.FONT_NORMAL}px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: ${SIZE.PADDING}px 0px;
  margin: ${SIZE.MARGIN}px 0px;

  span {
    font-size: ${SIZE.FONT_SMALL}px;
  }
`;

export const NameMenu = styled.div`
  font-size: ${SIZE.FONT_NORMAL}px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE.MARGIN / 2}px;
  cursor: pointer;

  a {
    width: 100%;
    font-size: ${SIZE.FONT_SMALL}px;
    margin-left: ${SIZE.MARGIN / 2}px;
  }
`;

export const Button = styled.button`
  height: ${SIZE.FONT_SMALL}px;
  font-size: ${SIZE.FONT_SMALL}px;
  color: ${COLORS.WHITE};
  padding: 0px;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: left;
  margin-left: ${SIZE.MARGIN / 2}px;
  cursor: pointer;
`;

export const DropDownPosition = styled.div`
  position: relative;
  top: ${SIZE.MARGIN}px;
  overflow: hidden;
  z-index: 100;
`;

export const DropDown = styled.ul`
  background-color: ${COLORS.VIEW_BACKGROUND};
  margin-bottom: ${SIZE.MARGIN}px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border-bottom-left-radius: ${SIZE.BORDER_RADIUS}px;
  border-bottom-right-radius: ${SIZE.BORDER_RADIUS}px;

  &.none {
    animation: dropup ${TIME.SIDE_DROPDOWN}s ease;
    animation-fill-mode: forwards;
    @keyframes dropup {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100%);
      }
    }
  }

  &.active {
    animation: dropdown ${TIME.SIDE_DROPDOWN}s ease;
    @keyframes dropdown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  a {
    width: 100%;
  }

  a:hover {
    background-color: ${COLORS.BACKGROUND};
    border-radius: ${SIZE.BORDER_RADIUS}px;
  }
`;

export const DropDownList = styled.li`
  font-size: ${SIZE.FONT_SMALL}px;
  margin: ${SIZE.MARGIN}px ${SIZE.MARGIN}px;

  :hover {
    background-color: ${COLORS.BACKGROUND};
  }
`;
