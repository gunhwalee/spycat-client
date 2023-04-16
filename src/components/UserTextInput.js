import React from "react";
import * as S from "../styles/UserInputStyles";

function UserTextInput({
  Component,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
}) {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {Component && <Component width="20px" height="20px" />}
        <S.Input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={inputHandler}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </S.InputBox>
      <S.RuleBox style={{ visibility: focus ? "visible" : "hidden" }}>
        {rule}
      </S.RuleBox>
    </S.InputWrapper>
  );
}

export default UserTextInput;
