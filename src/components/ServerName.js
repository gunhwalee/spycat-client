import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "../styles/SideBarStyles";

function ServerName({ name, id }) {
  const [showDrop, setShowDrop] = useState(false);

  const mouseEvent = bool => {
    setShowDrop(bool);
  };

  return (
    <div
      onMouseEnter={() => mouseEvent(true)}
      onMouseLeave={() => mouseEvent(false)}
    >
      <S.List>{name}</S.List>
      {showDrop && (
        <S.DropDown>
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
      )}
    </div>
  );
}

export default ServerName;
