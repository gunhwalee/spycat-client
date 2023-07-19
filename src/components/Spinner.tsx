import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

const SpinnerBox = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinDiv = styled.div`
  width: ${SIZE.FONT_REGULAR}px;
  height: ${SIZE.FONT_REGULAR}px;
  border-radius: 50%;
  border: ${SIZE.BORDER_RADIUS}px solid
    ${COLORS.SPINNER};
  border-top-color: #333;
  animation: spin 1s infinite ease-in-out;
`;

function Spinner(): JSX.Element {
  return (
    <SpinnerBox>
      <SpinDiv />
    </SpinnerBox>
  );
}

export default Spinner;
