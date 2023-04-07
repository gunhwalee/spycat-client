import React from "react";
import styled from "styled-components";

import { COLORS } from "../assets/constants";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    margin-top: 150px;
    padding-bottom: 40px;
    font-size: 40px;
  }

  #login-form {
    display: flex;
    flex-direction: column;

    .box {
      display: flex;
      padding: 10px 0px;
      margin-bottom: 25px;
    }

    & input {
      border: none;
      font-size: 18px;
    }

    & input:focus {
      outline: none;
    }

    & input:not([type="submit"]) {
      margin-left: 5px;
      border-bottom: 1px solid ${COLORS.GRAY};
    }

    & input[type="submit"] {
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: 15px 0px;
      border-radius: 5px;
      margin-bottom: 25px;
    }

    .btn-github {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: 15px 0px;
      border-radius: 5px;

      > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`;

function Login() {
  return (
    <EntryWrapper>
      <header>Spy Cat</header>
      <form id="login-form">
        <div className="inner-pannel">
          <div className="box id">
            <Id width="20px" height="20px" />
            <input type="text" id="id" placeholder="아이디" maxLength="20" />
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
    </EntryWrapper>
  );
}

export default Login;
