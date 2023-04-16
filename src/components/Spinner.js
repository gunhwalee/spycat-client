import styled from "styled-components";
import { SIZE } from "../assets/constants";

const SpinnerBox = styled.div`
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
`;

function Spinner() {
  return (
    <SpinnerBox>
      <div className="spinner" />
    </SpinnerBox>
  );
}

export default Spinner;
