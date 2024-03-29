import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SpinnerBox = styled.div`
  background-color: ${COLORS.BACKGROUND};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.div`
  font-size: ${SIZE.FONT_TITLE}px;
  font-weight: 500;
  margin-top: ${SIZE.MARGIN * 2}px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: ${SIZE.MARGIN * 2}px ${SIZE.MARGIN * 10}px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin: ${SIZE.MARGIN}px 0px;
`;

export const Button = styled.button`
  border: 1px solid ${COLORS.GRAY};
  border-radius: ${SIZE.BORDER_RADIUS}px;
  background-color: transparent;
  min-width: 120px;
  height: 40px;
  font-size: ${SIZE.FONT_REGULAR}px;
  margin: 0px ${SIZE.MARGIN / 2}px;
  cursor: pointer;

  :hover {
    background-color: ${COLORS.BUTTON};
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.VIEW_BACKGROUND};
  }

  &.select {
    background-color: ${COLORS.BUTTON};
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.VIEW_BACKGROUND};
  }
`;

export const ErrorTitle = styled.div`
  font-weight: bold;
  font-size: ${SIZE.FONT_TITLE}px;
  margin-bottom: ${SIZE.MARGIN}px;
`;

export const ErrorMessage = styled.div`
  font-weight: 500;
  font-size: ${SIZE.FONT_TITLE}px;
  margin-bottom: ${SIZE.MARGIN}px;
`;

export const ErrorDetail = styled.div`
  display: flex;
  font-size: ${SIZE.FONT_INPUT}px;

  .divider {
    margin: 0px ${SIZE.MARGIN / 2}px;
  }
`;

export const ErrorBox = styled.article`
  border: 1px solid ${COLORS.VIEW_BACKGROUND};
  border-radius: ${SIZE.BORDER_RADIUS * 5}px;
  padding: ${SIZE.PADDING * 2}px;
  margin: ${SIZE.MARGIN * 4}px 0px;

  :hover {
    background-color: ${COLORS.RED_HOVER};
    border: 1px solid ${COLORS.RED};
    cursor: pointer;
  }

  &:hover ${ErrorDetail}, &:hover ${ErrorTitle}, &:hover ${ErrorMessage} {
    color: ${COLORS.WHITE};
  }
`;
