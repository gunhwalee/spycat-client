import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const InputWrapper = styled.div`
  width: 400px;
  overflow: auto;
`;

export const InputBox = styled.div`
  display: flex;
  font-size: 20px;
  padding: ${SIZE.PADDING * 2}px 0px;
`;

export const Input = styled.input`
  width: 350px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: ${SIZE.FONT_REGULAR}px;
  margin-left: ${SIZE.MARGIN / 2}px;
  border-bottom: 1px solid ${COLORS.GRAY};

  :hover {
    outline: none;
  }

  &.read {
    background-color: aliceblue;
  }
`;

export const PwBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const RuleBox = styled.div`
  font-size: 14px;
  margin: ${SIZE.MARGIN}px 0;
  color: ${COLORS.BLUE};
`;
