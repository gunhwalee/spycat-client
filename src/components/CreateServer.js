import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "../styles/UserInputStyle";
import { ReactComponent as Server } from "../assets/img/server.svg";
import { ReactComponent as Globe } from "../assets/img/globe.svg";
import logo from "../assets/img/logo.jpg";
import { changeUsingHook } from "../features/userSlice";

function CreateServer() {
  const [info, setInfo] = useState({
    serverName: null,
    url: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [hostFocus, setHostFocus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { apikey } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    try {
      setDisabled(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/serverlists`,
        info,
        { withCredentials: true },
      );

      setDisabled(false);
      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      dispatch(changeUsingHook());
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
      <header className="logo-header">
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <form id="submit-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
          <div className="box">
            <Server width="20px" height="20px" />
            <input
              type="text"
              id="serverName"
              placeholder="서버이름"
              maxLength="20"
              onChange={inputHandler}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
          </div>
          <div
            className="rule"
            style={{ visibility: nameFocus ? "visible" : "hidden" }}
          >
            서버를 식별할 이름을 작성해주세요.
          </div>
          <div className="box">
            <Globe width="20px" height="20px" />
            <input
              type="text"
              id="url"
              placeholder="호스트주소"
              onChange={inputHandler}
              onFocus={() => setHostFocus(true)}
              onBlur={() => setHostFocus(false)}
            />
          </div>
          <div
            className="rule"
            style={{ visibility: hostFocus ? "visible" : "hidden" }}
          >
            서버 호스트 주소를 입력해주세요.
          </div>
        </div>
        <button type="submit" disabled={disabled} className="submitBtn">
          {!disabled && "만들기"}
          {disabled && <div className="spinner" />}
        </button>
      </form>
      <nav>
        <button type="button" onClick={() => navigate(-1)} className="moveBtn">
          <span className="move">뒤로가기</span>
        </button>
      </nav>
      <S.Footer>
        {errorMessage && <li className="error">{errorMessage}</li>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default CreateServer;
