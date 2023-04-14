import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #submit-form {
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    .inner-pannel {
      margin-bottom: ${SIZE.MARGIN * 5}px;
    }

    .submitBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: ${SIZE.PADDING * 2}px 0px;
      border-radius: ${SIZE.BORDER}px;
      border: none;
      margin-bottom: ${SIZE.MARGIN * 3}px;
      font-size: ${SIZE.FONT_BUTTON}px;
    }

    .spinner {
      width: ${SIZE.FONT_REGULAR}px;
      height: ${SIZE.FONT_REGULAR}px;
      border-radius: 50%;
      border: ${SIZE.BORDER}px solid #ccc;
      border-top-color: #333;
      animation: spin 1s infinite ease-in-out;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .moveBtn {
    border: none;
    background-color: transparent;
    cursor: pointer;

    .move {
      color: ${COLORS.GRAY};
      font-size: ${SIZE.FONT_SMALL}px;
    }

    .left {
      margin-right: ${SIZE.MARGIN * 2}px;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: ${SIZE.MARGIN * 2}px;

  > li {
    list-style: none;
    font-size: ${SIZE.FONT_SMALL}px;
    margin: ${SIZE.MARGIN}px 0px;
  }

  .error {
    color: red;
  }
`;
