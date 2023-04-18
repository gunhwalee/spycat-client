import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as S from "../styles/SumbitStyles";
import * as G from "../styles/GlobalStyles";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { setUser } from "../features/userSlice";
import LogoHeader from "../components/LogoHeader";
import UserTextInput from "../components/UserTextInput";
import UserSecretInput from "../components/UserScretInput";
import Spinner from "../components/Spinner";

function LoginPage() {
  const [info, setInfo] = useState({
    id: null,
    pw: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [idFocus, setIdFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    try {
      setDisabled(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/login`,
        info,
        { withCredentials: true },
      );

      setDisabled(false);
      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      const { name, apikey, id } = response.data;
      dispatch(setUser({ name, apikey, id }));

      navigate("/");
    } catch (err) {
      console.error(err);
      setDisabled(false);
      return setErrorMessage(
        "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
      );
    }
  };

  const inputHandler = event => {
    const newInfo = { ...info };
    switch (event.target.id) {
      case "id":
        newInfo.id = event.target.value;
        setInfo(newInfo);
        break;

      case "pw":
        newInfo.pw = event.target.value;
        setInfo(newInfo);
        break;

      default:
        break;
    }
  };

  const pwHandler = () => {
    setShowPw(!showPw);
  };

  return (
    <S.EntryWrapper>
      <LogoHeader size="60px" />
      <S.SubmitForm onSubmit={handleSubmit}>
        <div>
          <UserTextInput
            Component={Id}
            id="id"
            placeholder="아이디 (이메일)"
            inputHandler={inputHandler}
            setFocus={setIdFocus}
            focus={idFocus}
            rule="아이디는 이메일을 사용하세요."
          />
          <UserSecretInput
            Component={Password}
            id="pw"
            placeholder="비밀번호"
            inputHandler={inputHandler}
            setFocus={setPwFocus}
            focus={pwFocus}
            rule="8~16자 영문 대 소문자, 숫자를 사용하세요."
            pwHandler={pwHandler}
            showPw={showPw}
          />
        </div>
        <G.Button type="submit" disabled={disabled}>
          {disabled ? <Spinner /> : "로그인"}
        </G.Button>
      </S.SubmitForm>
      <S.Nav>
        <Link to="/">
          <G.LinkSpan>메인 페이지</G.LinkSpan>
        </Link>
        <Link to="/signup">
          <G.LinkSpan>회원가입</G.LinkSpan>
        </Link>
      </S.Nav>
      <S.Footer>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default LoginPage;
