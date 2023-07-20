import * as S from "../styles/UserInputStyles";

interface InformProps {
  path: string,
  value: string | null,
}

function TextInform({ path, value }: InformProps): JSX.Element {
  return (
    <S.InputWrapper>
      <S.InputBox>
        {path && <img width="20px" height="20px" src={path} alt="logo" />}
        <S.Input
          type="text"
          value={value ? value : ""}
          readOnly
          className="read"
        />
      </S.InputBox>
    </S.InputWrapper>
  );
}

export default TextInform;
