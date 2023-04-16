import React from "react";
import { Link } from "react-router-dom";

import * as S from "../styles/PageHeaderStyles";
import logo from "../assets/img/logo.png";
import { SIZE } from "../assets/constants";

function PageHeader({ title, text }) {
  return (
    <S.Header>
      <S.Container>
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            width={`${SIZE.PAGEHEADER_LOGO}px`}
            height={`${SIZE.PAGEHEADER_LOGO}px`}
          />
          <S.LogoTitle>Spy Cat</S.LogoTitle>
        </Link>
      </S.Container>
      <S.TitleContainer>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.TitleContainer>
      <S.LastContainer>
        <S.HeaderText>{text}</S.HeaderText>
      </S.LastContainer>
    </S.Header>
  );
}

export default PageHeader;
