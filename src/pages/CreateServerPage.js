import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "../styles/SumbitStyles";
import { ReactComponent as Server } from "../assets/img/server.svg";
import { ReactComponent as Globe } from "../assets/img/globe.svg";
import { changeUsingHook } from "../features/userSlice";
import LogoHeader from "../components/LogoHeader";
import UserTextInput from "../components/UserTextInput";

function CreateServerPage() {
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
      <header className="big-logo-header">
        <LogoHeader size="60px" />
      </header>
      <form id="submit-form" onSubmit={handleSubmit}>
        <div className="inner-pannel">
          <UserTextInput
            Component={Server}
            id="serverName"
            placeholder="서버 이름"
            inputHandler={inputHandler}
            setFocus={setNameFocus}
            focus={nameFocus}
            rule="서버를 식별할 이름을 작성해주세요."
          />
          <UserTextInput
            Component={Globe}
            id="url"
            placeholder="호스트 주소"
            inputHandler={inputHandler}
            setFocus={setHostFocus}
            focus={hostFocus}
            rule="서버 호스트 주소를 입력해주세요."
          />
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

export default CreateServerPage;
