import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./UserInputStyle";
import { ReactComponent as Server } from "../assets/img/server.svg";
import { ReactComponent as Globe } from "../assets/img/globe.svg";
import logo from "../assets/img/logo.jpg";

function CreateServer() {
  const [info, setInfo] = useState({
    serverName: null,
    url: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${id}/serverlists`,
        info,
        { withCredentials: true },
      );

      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      navigate(`/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const inputHandler = event => {
    const newInfo = { ...info };
    switch (event.target.id) {
      case "serverName":
        newInfo.serverName = event.target.value;
        setInfo(newInfo);
        break;

      case "url":
        newInfo.url = event.target.value;
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
      <form id="submit-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
          <div className="box id">
            <Server width="20px" height="20px" />
            <input
              type="text"
              id="serverName"
              placeholder="서버이름"
              maxLength="20"
              onChange={inputHandler}
            />
          </div>
          <div className="box pw">
            <Globe width="20px" height="20px" />
            <input
              type="text"
              id="url"
              placeholder="호스트주소"
              onChange={inputHandler}
            />
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
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default CreateServer;
