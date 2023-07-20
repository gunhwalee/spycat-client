import * as S from "../styles/UserInputStyles";
import { InputComponentProps } from "../types/components";

function UserTextInput({
  path,
  id,
  placeholder,
  inputHandler,
  setFocus,
  focus,
  rule,
}: InputComponentProps): JSX.Element {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {path && <img width="20px" height="20px" src={path} alt="logo" />}
        <S.Input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={(e) => inputHandler(e)}
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
