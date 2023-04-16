import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

const EntryWrapper = styled.div`
  width: 100%;

  main {
    display: flex;
    justify-content: space-evenly;
    height: calc(100% - 80px);
    margin-top: ${SIZE.MARGIN * 2}px;

    .wrapper {
      width: 45%;
    }

    .left {
      display: flex;
      flex-direction: column;

      > section {
        flex: 1;
      }
    }

    .sub-title {
      font-weight: 400;
      font-size: ${SIZE.FONT_TITLE}px;
    }

    .content {
      border: 1px solid ${COLORS.VIEW_BACKGROUND};
      border-radius: ${SIZE.BORDER_RADIUS * 2}px;
      padding: ${SIZE.PADDING * 2}px;
      margin: ${SIZE.MARGIN}px 0;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: ${SIZE.BORDER_RADIUS}px;
        border: 1px solid;
        width: 50px;
        height: 30px;
      }

      .create {
        background-color: ${COLORS.BLUE};
        color: ${COLORS.SIDEBAR};
      }

      .create:hover {
        background-color: ${COLORS.BLUE_HOVER};
      }

      .delete {
        background-color: ${COLORS.RED};
        color: ${COLORS.SIDEBAR};
      }

      .delete:hover {
        background-color: ${COLORS.RED_HOVER};
      }
    }

    .name {
      font-size: ${SIZE.FONT_REGULAR}px;
      font-weight: 500;
      margin-bottom: ${SIZE.MARGIN}px;
    }

    .spinner {
      width: ${SIZE.FONT_REGULAR}px;
      height: ${SIZE.FONT_REGULAR}px;
      border-radius: 50%;
      border: ${SIZE.BORDER_RADIUS}px solid #ccc;
      border-top-color: #333;
      animation: spin 1s infinite ease-in-out;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default EntryWrapper;
