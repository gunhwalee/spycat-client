import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "../styles/SideBarStyles";
import { ReactComponent as DownArrow } from "../assets/img/angle-down.svg";
import { COLORS, TIME } from "../assets/constants";

function ServerName({ name, id }) {
  const [showDrop, setShowDrop] = useState(false);
  const [animation, setAnimation] = useState(false);

  const mouseHandler = () => {
    if (showDrop) {
      setAnimation(false);
      setTimeout(() => {
        setShowDrop(false);
      }, TIME.SIDE_DROPDOWN * 1000);
    } else {
      setAnimation(true);
      setShowDrop(true);
    }
  };

  return (
    <S.List>
      <S.NameMenu onMouseEnter={mouseHandler} onMouseLeave={mouseHandler}>
        <S.NameBox>
          {name}
          <button type="button">
            <DownArrow width="10px" fill={COLORS.WHITE} />
          </button>
        </S.NameBox>
        {showDrop && (
          <S.DropDownPosition>
            <S.DropDown className={animation ? "active" : "none"}>
              <Link to={`/${id}/traffics`}>
                <S.DropDownList>트래픽 차트</S.DropDownList>
              </Link>
              <Link to={`/${id}/errors`}>
                <S.DropDownList>에러 차트</S.DropDownList>
              </Link>
              <Link to={`/${id}/errorlists`}>
                <S.DropDownList>에러 목록</S.DropDownList>
              </Link>
            </S.DropDown>
          </S.DropDownPosition>
        )}
      </S.NameMenu>
    </S.List>
  );
}

export default ServerName;
