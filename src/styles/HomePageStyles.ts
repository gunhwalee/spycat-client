import styled from "styled-components";
import { SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  margin-bottom: 25px;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  font-size: ${SIZE.FONT_TITLE}px;
  font-weight: 500;
  margin-top: ${SIZE.MARGIN}px;
`;
