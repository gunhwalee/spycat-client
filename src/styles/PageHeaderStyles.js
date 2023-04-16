import styled from "styled-components";
import { SIZE } from "../assets/constants";

export const Header = styled.header`
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: row;

  a {
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
  font-weight: 700;
  font-size: 40px;
`;

export const HeaderText = styled.h1`
  font-weight: 400;
  font-size: 15px;
`;

export const LogoTitle = styled.h1`
  font-size: ${SIZE.PAGEHEADER_LOGO}px;
  margin-left: ${SIZE.MARGIN / 2}px;
`;
