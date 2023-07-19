import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "../styles/SumbitStyles";
import * as G from "../styles/GlobalStyles";
import Server from "../assets/img/server.svg";
import Globe from "../assets/img/globe.svg";
import LogoHeader from "../components/LogoHeader";
import UserTextInput from "../components/UserTextInput";
import Spinner from "../components/Spinner";
import { addServer } from "../features/userSlice";
import { ServerInfo } from "../types/props";

function CreateServerPage(): JSX.Element {
  const [info, setInfo] = useState<ServerInfo>({
    serverName: null,
    url: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [hostFocus, setHostFocus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { _id } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      setDisabled(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${_id}/serverlists`,
        info,
        { withCredentials: true },
      );

      setDisabled(false);
      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      dispatch(addServer({ server: response.data.server }));
      navigate("/");
    } catch (err) {
      console.error(err);
      setDisabled(false);
      return setErrorMessage(
        "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
      );
    }
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <LogoHeader />
      <S.SubmitForm onSubmit={handleSubmit}>
        <div>
          <UserTextInput
            path={Server}
            id="serverName"
            placeholder="서버 이름"
            inputHandler={inputHandler}
            setFocus={setNameFocus}
            focus={nameFocus}
            rule="서버를 식별할 이름을 작성해주세요."
          />
          <UserTextInput
            path={Globe}
            id="url"
            placeholder="호스트 주소"
            inputHandler={inputHandler}
            setFocus={setHostFocus}
            focus={hostFocus}
            rule="서버 호스트 주소를 입력해주세요."
          />
        </div>
        <G.Button type="submit" disabled={disabled}>
          {disabled ? <Spinner /> : "서버 생성"}
        </G.Button>
      </S.SubmitForm>
      <S.Nav>
        <Link to="/">
          <G.LinkSpan>메인 페이지</G.LinkSpan>
        </Link>
      </S.Nav>
      <S.Footer>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.Footer>
    </S.EntryWrapper>
  );
}

export default CreateServerPage;
