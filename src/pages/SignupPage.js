import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "../styles/SumbitStyles";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as PasswordCheck } from "../assets/img/password-check.svg";
import LogoHeader from "../components/LogoHeader";
import UserTextInput from "../components/UserTextInput";
import UserSecretInput from "../components/UserScretInput";

function SignupPage() {
  const [info, setInfo] = useState({
    name: null,
    id: null,
    pw: null,
    pwCheck: null,
  });
  const [nameFocus, setNameFocus] = useState(false);
  const [idFocus, setIdFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    if (info.pw !== info.pwCheck)
      return setErrorMessage("비밀번호가 동일하지 않습니다.");

    try {
      setDisabled(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users`,
        info,
      );

      setDisabled(false);
      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      navigate("/login");
    } catch (error) {
      console.error(error);
      setDisabled(false);
      return setErrorMessage(
        "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
      );
    }
  };

  const inputHandler = event => {
    const newInfo = { ...info };
    switch (event.target.id) {
      case "name":
        newInfo.name = event.target.value;
        setInfo(newInfo);
        break;

      case "id":
        newInfo.id = event.target.value;
        setInfo(newInfo);
        break;

      case "pw":
        newInfo.pw = event.target.value;
        setInfo(newInfo);
        break;

      case "pwCheck":
        newInfo.pwCheck = event.target.value;
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
            id="name"
            placeholder="이름"
            inputHandler={inputHandler}
            setFocus={setNameFocus}
            focus={nameFocus}
            rule="이름은 최대 10자입니다."
          />
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
          <UserSecretInput
            Component={PasswordCheck}
            id="pwCheck"
            placeholder="비밀번호 확인"
            inputHandler={inputHandler}
            setFocus={setPwFocus}
            focus={pwFocus}
            rule="8~16자 영문 대 소문자, 숫자를 사용하세요."
            pwHandler={pwHandler}
            showPw={showPw}
          />
        </div>
        <button type="submit" disabled={disabled} className="submitBtn">
          {!disabled && "회원가입"}
          {disabled && <div className="spinner" />}
        </button>
      </form>
      <nav>
        <button type="button" className="moveBtn" onClick={() => navigate("/")}>
          <span className="move left">메인 페이지</span>
        </button>
        <button
          type="button"
          className="moveBtn"
          onClick={() => navigate("/login")}
        >
          <span className="move">로그인</span>
        </button>
      </nav>
      <S.Footer>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default SignupPage;
