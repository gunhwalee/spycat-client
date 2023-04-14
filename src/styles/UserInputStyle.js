import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

const InputWrapper = styled.div`
  .input-box {
    display: flex;
    padding: ${SIZE.PADDING}px 0px;

    .pwBtn {
      cursor: pointer;
      border: none;
      background-color: transparent;
    }

    input {
      border: none;
      font-size: ${SIZE.FONT_REGULAR}px;
      margin-left: ${SIZE.MARGIN / 2}px;
      border-bottom: 1px solid ${COLORS.GRAY};
    }

    input:focus {
      outline: none;
    }
  }

  .rule {
    font-size: 14px;
    margin: ${SIZE.MARGIN}px 0;
    color: ${COLORS.BLUE};
  }
`;

export default InputWrapper;
