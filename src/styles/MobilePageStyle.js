import styled from "styled-components";
import { SIZE } from "../assets/constants";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  font-size: ${SIZE.FONT_INPUT}px;
  margin: 10px 0px;
`;
