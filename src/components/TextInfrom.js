import React from "react";
import * as S from "../styles/UserInputStyles";

function TextInfrom({ Component, value }) {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {Component && <Component width="20px" height="20px" />}
        <S.Input type="text" defaultValue={value} disabled />
      </S.InputBox>
    </S.InputWrapper>
  );
}

export default TextInfrom;
