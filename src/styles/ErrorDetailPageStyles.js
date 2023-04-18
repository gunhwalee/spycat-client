import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.MODAL_BACK};
  height: calc(100vh - 60px);
  padding: ${SIZE.PADDING * 2}px;
`;

export const Section = styled.section`
  margin-bottom: ${SIZE.MARGIN * 3}px;
`;

export const Header = styled.header`
  font-size: ${SIZE.FONT_TITLE}px;
  font-weight: 600;
  margin-bottom: ${SIZE.MARGIN * 2}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  min-height: 50px;
  max-height: 300px;
  border: 1px solid ${COLORS.BORDER};
  padding: ${SIZE.PADDING}px;
  border-radius: ${SIZE.BORDER_RADIUS}px;
`;

export const Description = styled.div`
  margin-bottom: ${SIZE.MARGIN}px;
`;

export const StackBox = styled.div`
  margin: ${SIZE.MARGIN}px;
  border: 1px solid ${COLORS.BORDER};
  padding: ${SIZE.PADDING}px;
  background-color: ${COLORS.SIDEBAR};
  color: ${COLORS.WHITE};
  border-radius: ${SIZE.BORDER_RADIUS}px;
  max-height: 250px;
  overflow: auto;
`;
