import { useEffect } from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

const ToastBox = styled.div`
  position: absolute;
  bottom: 5%;
  left: calc(50% - 75px);
  width: 250px;
  background-color: ${COLORS.TOAST};
  border: 1px solid ${COLORS.SIDEBAR};
  border-radius: ${SIZE.BORDER_RADIUS}px;
  padding: ${SIZE.PADDING}px;
  font-size: ${SIZE.FONT_SMALL}px;
  text-align: center;
  opacity: 0.6;
`;

interface ToastProps {
  setToast: Function,
  text: string,
}

function Toast({ setToast, text }: ToastProps): JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setToast]);

  return (
    <ToastBox>
      <p>{text}</p>
    </ToastBox>
  );
}

export default Toast;
