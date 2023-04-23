import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const Header = styled.header`
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: ${COLORS.WHITE};
  border-bottom-left-radius: ${SIZE.BORDER_RADIUS * 2}px;
  border-bottom-right-radius: ${SIZE.BORDER_RADIUS * 2}px;
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: row;

  > a {
    display: flex;
  }
`;

export const TitleContainer = styled.div`
  flex: 2;
  flex-direction: row;
`;

export const LastContainer = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.h1`
  font-size: ${SIZE.FONT_PAGEHEADER}px;
  font-weight: bold;
`;

export const HeaderText = styled.h1`
  font-size: ${SIZE.FONT_NORMAL}px;
  font-weight: 500;
`;

export const LogoTitle = styled.h1`
  font-size: ${SIZE.PAGEHEADER_LOGO}px;
  font-weight: 500;
  margin-left: ${SIZE.MARGIN / 2}px;
`;
