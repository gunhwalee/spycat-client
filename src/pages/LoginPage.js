import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as S from "../styles/SumbitStyles";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { setUser } from "../features/userSlice";
import LogoHeader from "../components/LogoHeader";
import UserTextInput from "../components/UserTextInput";
import UserSecretInput from "../components/UserScretInput";
import { SIZE } from "../assets/constants";

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

      navigate("/entry");
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
      <header className="big-logo-header">
        <LogoHeader size="60px" />
      </header>
      <form id="submit-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
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
        <button type="submit" disabled={disabled} className="submitBtn">
          {disabled ? <div className="spinner" /> : "로그인"}
        </button>
        <button type="button" disabled={disabled} className="submitBtn github">
          <Github width={SIZE.FONT_BUTTON} height={SIZE.FONT_BUTTON} />
          Github 로그인
        </button>
      </form>
      <nav>
        <button type="button" className="moveBtn" onClick={() => navigate("/")}>
          <span className="move left">메인 페이지</span>
        </button>
        <button
          type="button"
          className="moveBtn"
          onClick={() => navigate("/signup")}
        >
          <span className="move">회원가입</span>
        </button>
      </nav>
      <S.Footer>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default LoginPage;
