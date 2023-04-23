import { forwardRef } from "react";
import * as S from "../styles/UserInputStyles";

const TextInform = forwardRef(function TextInform({ Component, value }, ref) {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {Component && <Component width="20px" height="20px" />}
        <S.Input
          type="text"
          value={value}
          readOnly
          ref={ref}
          className="read"
        />
      </S.InputBox>
    </S.InputWrapper>
  );
});

export default TextInform;
