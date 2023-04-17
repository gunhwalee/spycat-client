import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  height: calc(100% - 80px);
  margin-top: ${SIZE.MARGIN * 2}px;
`;

export const LeftWrapper = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
  }
`;

export const RightWrapper = styled.section`
  width: 45%;
`;

export const SubTitle = styled.header`
  font-size: ${SIZE.FONT_TITLE}px;
  font-weight: 500;
`;

export const SubContent = styled.article`
  border: 1px solid ${COLORS.VIEW_BACKGROUND};
  border-radius: ${SIZE.BORDER_RADIUS * 2}px;
  padding: ${SIZE.PADDING * 2}px;
  margin: ${SIZE.MARGIN}px 0;

  &.button {
    display: flex;
    justify-content: space-between;
  }
`;

export const ServerName = styled.p`
  font-size: ${SIZE.FONT_REGULAR}px;
  font-weight: 500;
  margin-bottom: ${SIZE.MARGIN}px;
`;

export const copyBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const addBtn = styled.button`
  width: 100%;
  border: 1px solid ${COLORS.VIEW_BACKGROUND};
  border-radius: ${SIZE.BORDER_RADIUS * 2}px;
  padding: ${SIZE.PADDING * 2}px;
  font-size: ${SIZE.FONT_SMALL}px;
  background-color: transparent;
  cursor: pointer;
`;
