import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
          <div className="box userinput">
            <Server width="20px" height="20px" />
            <input
              type="text"
              id="serverName"
              placeholder="서버이름"
              maxLength="20"
              onChange={inputHandler}
            />
          </div>
          <div className="box userinput">
            <Globe width="20px" height="20px" />
            <input
              type="text"
              id="url"
              placeholder="호스트주소"
              onChange={inputHandler}
            />
          </div>
        </div>
        <button type="submit" disabled={disabled} className="btn-login local">
          {!disabled && "만들기"}
          {disabled && <div className="spinner" />}
        </button>
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
