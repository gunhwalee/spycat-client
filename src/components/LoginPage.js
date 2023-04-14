import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as S from "../styles/UserInputStyle";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Eye } from "../assets/img/eye.svg";
import { ReactComponent as EyeSlash } from "../assets/img/eye-slash.svg";
import { setUser } from "../features/userSlice";
import LogoHeader from "./LogoHeader";

function LoginPage() {
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
          <div className="box login">
            <Id width="20px" height="20px" />
            <input
              type="email"
              id="id"
              placeholder="아이디(이메일)"
              maxLength="40"
              onChange={inputHandler}
            />
          </div>
          <div className="box login">
            <Password width="20px" height="20px" />
            <input
              type={showPw ? "text" : "password"}
              id="pw"
              placeholder="비밀번호"
              minLength="8"
              maxLength="16"
              onChange={inputHandler}
            />
            <button type="button" onClick={pwHandler} className="pwBtn">
              {showPw ? (
                <Eye width="20px" height="20px" />
              ) : (
                <EyeSlash width="20px" height="20px" />
              )}
            </button>
          </div>
        </div>
        <button type="submit" disabled={disabled} className="submitBtn">
          {!disabled && "로그인"}
          {disabled && <div className="spinner" />}
        </button>
        <button type="button" disabled={disabled} className="submitBtn github">
          <Github width="20px" height="20px" />
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
