import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const Main = styled.main`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MainChart = styled.section`
  width: 100%;
  min-height: 500px;
  height: calc(60% - 5px);
  margin-top: ${SIZE.MARGIN * 1.3}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${SIZE.BORDER_RADIUS * 2}px;
  background-color: ${COLORS.WHITE};
`;

export const MainChartBox = styled.article`
  width: 1000px;
  min-width: 500px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubChart = styled.section`
  width: 100%;
  height: calc(38% - 5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubChartBox = styled.article`
  width: calc(50% - 8px);
  height: 100%;
  background-color: ${COLORS.WHITE};
  border-top-right-radius: ${SIZE.BORDER_RADIUS * 2}px;
  border-top-left-radius: ${SIZE.BORDER_RADIUS * 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.h1`
  font-size: ${SIZE.FONT_TITLE}px;
  margin-top: ${SIZE.MARGIN * 2}px;
`;
