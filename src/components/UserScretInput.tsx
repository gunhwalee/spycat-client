import * as S from "../styles/UserInputStyles";

import { ReactComponent as Eye } from "../assets/img/eye.svg";
import { ReactComponent as EyeSlash } from "../assets/img/eye-slash.svg";
import { InputComponentProps } from "../types/props";

interface SecretInputComponentProps extends InputComponentProps {
  pwHandler: Function,
  showPw: boolean
}

function UserSecretInput({
  path,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
  pwHandler,
  showPw,
}: SecretInputComponentProps): JSX.Element {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {path && <img width="20px" height="20px" src={path} alt="logo" />}
        <S.Input
          type={showPw ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          onChange={(e) => inputHandler(e)}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
        <S.PwBtn type="button" onClick={() => pwHandler()}>
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
