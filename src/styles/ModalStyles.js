import styled from "styled-components";
import { COLORS, TIME } from "../assets/constants";

export const Container = styled.div`
  display: flex;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: -50%;
  width: 50%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: ${COLORS.MODAL_BACK};
  transition: ${TIME.DETAIL_TRANSITION};

  &.active {
    right: 0;
    transition: ${TIME.DETAIL_TRANSITION};
  }
`;

export const Wrapper = styled.main`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: calc(50% - 25px);
  right: 0%;
  z-index: 990;
  width: 30px;
  height: 50px;
  background-color: ${COLORS.MODAL_BACK};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: black;
  cursor: pointer;
  transition: ${TIME.DETAIL_TRANSITION};

  &.none {
    right: -5%;
  }

  :hover svg {
    width: 20px;
    fill: skyblue;
  }

  &.active {
    right: 50%;
    transition: ${TIME.DETAIL_TRANSITION};
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
