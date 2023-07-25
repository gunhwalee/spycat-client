import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${SIZE.MARGIN * 4}px;
`;
export const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

export const Footer = styled.footer`
  margin-top: ${SIZE.MARGIN * 4}px;
`;

export const ErrorMessage = styled.span`
  font-size: ${SIZE.FONT_SMALL}px;
  margin: ${SIZE.MARGIN}px 0px;
  color: ${COLORS.RED};
  font-weight: 100;
`;
