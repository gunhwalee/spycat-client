import styled from "styled-components";
import { COLORS } from "../assets/constants";

export const ModalContainer = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: ${COLORS.MODAL_BACK};
`;

export const Wrapper = styled.main`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: calc(50% - 25px);
  right: 50%;
  z-index: 990;
  width: 30px;
  height: 50px;
  background-color: antiquewhite;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: black;
  cursor: pointer;

  :hover svg {
    width: 20px;
    fill: skyblue;
  }
`;

export const Canvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`;
