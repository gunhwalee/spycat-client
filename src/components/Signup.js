import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./UserInfoStyle";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as PasswordCheck } from "../assets/img/password-check.svg";
import logo from "../assets/img/logo.jpg";

function Signup() {
  const [info, setInfo] = useState({
    name: null,
    id: null,
    pw: null,
    pwCheck: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users`,
        info,
      );

      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      navigate("/login");
    } catch (error) {
      console.error(error);
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

  return (
    <S.EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
          <div className="box name">
            <Id width="20px" height="20px" />
            <input
              type="text"
              id="name"
              placeholder="이름"
              maxLength="10"
              onChange={inputHandler}
            />
          </div>
          <div className="box id">
            <Id width="20px" height="20px" />
            <input
              type="email"
              id="id"
              placeholder="아이디(이메일)"
              maxLength="20"
              onChange={inputHandler}
            />
          </div>
          <div className="box pw">
            <Password width="20px" height="20px" />
            <input
              type="password"
              id="pw"
              placeholder="비밀번호"
              minLength="8"
              maxLength="16"
              onChange={inputHandler}
            />
          </div>
          <div className="box pw">
            <PasswordCheck width="20px" height="20px" />
            <input
              type="password"
              id="pwCheck"
              placeholder="비밀번호 확인"
              minLength="8"
              maxLength="16"
              onChange={inputHandler}
            />
          </div>
        </div>
        <input type="submit" value="회원가입" />
      </form>
      <S.Footer>
        <li>이름은 최대 10자입니다.</li>
        <li>아이디는 이메일을 사용하세요.</li>
        <li>비밀번호는 8~16자 영문 대 소문자, 숫자를 사용하세요.</li>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default Signup;
