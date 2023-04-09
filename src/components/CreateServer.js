import React from "react";

import { Link } from "react-router-dom";
import * as S from "./UserInputStyle";
import { ReactComponent as Server } from "../assets/img/server.svg";
import { ReactComponent as Globe } from "../assets/img/globe.svg";
import logo from "../assets/img/logo.jpg";

function CreateServer() {
  return (
    <S.EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="submit-form">
        <div className="inner-pannel">
          <div className="box id">
            <Server width="20px" height="20px" />
            <input
              type="text"
              id="serverName"
              placeholder="서버이름"
              maxLength="20"
            />
          </div>
          <div className="box pw">
            <Globe width="20px" height="20px" />
            <input type="text" id="url" placeholder="호스트주소" />
          </div>
        </div>
        <input type="submit" value="만들기" />
      </form>
      <nav>
        <Link to="/">
          <span className="move">뒤로가기</span>
        </Link>
      </nav>
      <S.Footer>
        <li className="error">Error message</li>
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default CreateServer;
