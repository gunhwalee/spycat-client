import { useState } from "react";
import { TIME } from "../assets/constants";

interface FunctionResult {
  showUi: boolean,
  animation: boolean,
  handler: Function
}

function useAnimation(): FunctionResult {
  const [showUi, setShowUi] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const handler = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (showUi) {
      setAnimation(false);
      setTimeout(() => {
        setShowUi(false);
      }, TIME.DETAIL_TRANSITION * 1000);
    } else {
      setAnimation(true);
      setShowUi(true);
    }
  };

  return { showUi, animation, handler };
}

export default useAnimation;
