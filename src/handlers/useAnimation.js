import { useState } from "react";
import { TIME } from "../assets/constants";

function useAnimation() {
  const [showUi, setShowUi] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handler = () => {
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

  return [showUi, animation, handler];
}

export default useAnimation;
