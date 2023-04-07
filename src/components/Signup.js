import React from "react";
import styled from "styled-components";

import { COLORS } from "../assets/constants";
import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Password } from "../assets/img/password.svg";
import { ReactComponent as PasswordCheck } from "../assets/img/password-check.svg";
import logo from "../assets/img/logo.jpg";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    margin-top: 150px;
    padding-bottom: 100px;
    font-size: 60px;

    > h1 {
      margin-left: 10px;
    }
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

function Signup() {
  return (
    <EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="login-form">
        <div className="inner-pannel">
          <div className="box name">
            <Id width="20px" height="20px" />
            <input type="text" id="name" placeholder="이름" maxLength="10" />
          </div>
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
          <div className="box pw">
            <PasswordCheck width="20px" height="20px" />
            <input
              type="password"
              id="pw"
              placeholder="비밀번호 확인"
              maxLength="16"
            />
          </div>
        </div>
        <input type="submit" value="회원가입" />
      </form>
    </EntryWrapper>
  );
}

export default Signup;
