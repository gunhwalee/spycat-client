import { Link } from "react-router-dom";

import * as S from "../styles/SideBarStyles";
import { ReactComponent as DownArrow } from "../assets/img/angle-down.svg";
import { COLORS } from "../assets/constants";
import useAnimation from "../handlers/useAnimation";

function ServerName({ name, apikey }) {
  const [showUi, animation, handler] = useAnimation();

  return (
    <S.List>
      <S.NameMenu onMouseEnter={handler} onMouseLeave={handler}>
        <S.NameBox>
          {name}
          <button type="button">
            <DownArrow width="10px" fill={COLORS.WHITE} />
          </button>
        </S.NameBox>
        {showUi && (
          <S.DropDownPosition>
            <S.DropDown className={animation ? "active" : "none"}>
              <Link to={`/${apikey}/traffics`}>
                <S.DropDownList>트래픽 차트</S.DropDownList>
              </Link>
              <Link to={`/${apikey}/errors`}>
                <S.DropDownList>에러 차트</S.DropDownList>
              </Link>
              <Link to={`/${apikey}/errorlists`}>
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
