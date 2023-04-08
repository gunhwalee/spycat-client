import React from "react";
import { Link } from "react-router-dom";

import * as S from "./UserInfoStyle";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import logo from "../assets/img/logo.jpg";

function Login() {
  return (
    <S.EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="login-form">
        <div className="inner-pannel">
          <div className="box id">
            <Id width="20px" height="20px" />
            <input
              type="text"
              id="id"
              placeholder="아이디(이메일)"
              maxLength="20"
            />
          </div>
          <div className="box pw">
            <Password width="20px" height="20px" />
            <input
              type="password"
              id="pw"
              placeholder="비밀번호"
              maxLength="16"
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
    </S.EntryWrapper>
  );
}

export default Login;
