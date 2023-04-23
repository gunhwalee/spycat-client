import * as S from "../styles/UserInputStyles";

import { ReactComponent as Eye } from "../assets/img/eye.svg";
import { ReactComponent as EyeSlash } from "../assets/img/eye-slash.svg";

function UserSecretInput({
  Component,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
  pwHandler,
  showPw,
}) {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {Component && <Component width="20px" height="20px" />}
        <S.Input
          type={showPw ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          onChange={inputHandler}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
        <S.PwBtn type="button" onClick={pwHandler}>
          {showPw ? (
            <Eye width="20px" height="20px" />
          ) : (
            <EyeSlash width="20px" height="20px" />
          )}
        </S.PwBtn>
      </S.InputBox>
      <S.RuleBox style={{ visibility: focus ? "visible" : "hidden" }}>
        {rule}
      </S.RuleBox>
    </S.InputWrapper>
  );
}

export default UserSecretInput;
