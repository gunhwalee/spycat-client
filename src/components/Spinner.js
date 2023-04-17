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
  width: ${props => (props.size ? props.size : SIZE.FONT_REGULAR)}px;
  height: ${props => (props.size ? props.size : SIZE.FONT_REGULAR)}px;
  border-radius: 50%;
  border: ${props => (props.size ? props.size / 8 : SIZE.BORDER_RADIUS)}px solid
    ${COLORS.SPINNER};
  border-top-color: #333;
  animation: spin 1s infinite ease-in-out;
`;

function Spinner({ size }) {
  return (
    <SpinnerBox>
      <SpinDiv size={size} />
    </SpinnerBox>
  );
}

export default Spinner;
