import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BACKGROUND};
`;

export const LoadingBox = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.h1`
  font-size: ${SIZE.FONT_TITLE}px;
  margin-top: ${SIZE.MARGIN * 2}px;
`;
