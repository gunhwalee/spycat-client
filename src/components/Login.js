import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as S from "./UserInfoStyle";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import logo from "../assets/img/logo.jpg";
import { setUser } from "../features/userSlice";

function Login() {
  const [info, setInfo] = useState({
    id: null,
    pw: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/login`,
        info,
      );

      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      console.log(response);
      dispatch(setUser({ name: response.data.name }));

      navigate("/");
    } catch (err) {
      console.error(err);
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

  return (
    <S.EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
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
        </div>
        <input type="submit" value="로그인" />
        <div className="btn-github">
          <Github width="20px" height="20px" />
          <button type="button">Github 로그인</button>
        </div>
      </form>
      <Link to="/signup">
        <span className="move-signup">회원가입</span>
      </Link>
      <S.Footer>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default Login;
