import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as S from "../styles/UserInputStyle";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Eye } from "../assets/img/eye.svg";
import { ReactComponent as EyeSlash } from "../assets/img/eye-slash.svg";
import logo from "../assets/img/logo.jpg";
import { setUser } from "../features/userSlice";

function Login() {
  const [info, setInfo] = useState({
    id: null,
    pw: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [disabled, setDisabled] = useState(false);
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

      const { name, apikey } = response.data;
      dispatch(setUser({ name, apikey }));

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

  const pwHandler = () => {
    setShowPw(!showPw);
  };

  return (
    <S.EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="submit-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
          <div className="box id userinput">
            <Id width="20px" height="20px" />
            <input
              type="email"
              id="id"
              placeholder="아이디(이메일)"
              maxLength="20"
              onChange={inputHandler}
            />
          </div>
          <div className="box pw userinput">
            <Password width="20px" height="20px" />
            <input
              type={showPw ? "text" : "password"}
              id="pw"
              placeholder="비밀번호"
              minLength="8"
              maxLength="16"
              onChange={inputHandler}
            />
            <button type="button" onClick={pwHandler}>
              {showPw ? (
                <Eye width="20px" height="20px" />
              ) : (
                <EyeSlash width="20px" height="20px" />
              )}
            </button>
          </div>
        </div>
        <button type="submit" disabled={disabled} className="btn-login local">
          {!disabled && "로그인"}
          {disabled && <div className="spinner" />}
        </button>
        <div className="btn-login">
          <Github width="20px" height="20px" />
          <button type="button" disabled={disabled}>
            Github 로그인
          </button>
        </div>
      </form>
      <nav>
        <Link to="/">
          <span className="move main">메인 페이지</span>
        </Link>
        <Link to="/signup">
          <span className="move signup">회원가입</span>
        </Link>
      </nav>
      <S.Footer>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default Login;
