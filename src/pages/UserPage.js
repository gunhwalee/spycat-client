import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { ReactComponent as Id } from "../assets/img/id.svg";
import { ReactComponent as Key } from "../assets/img/key.svg";
import { ReactComponent as Copy } from "../assets/img/copy.svg";
import { ReactComponent as Delete } from "../assets/img/trash.svg";
import { ReactComponent as Regenerate } from "../assets/img/regenerate.svg";
import PageHeader from "../components/PageHeader";
import TextInform from "../components/TextInform";
import Spinner from "../components/Spinner";
import * as S from "../styles/UserPageStyles";
import Toast from "../components/Toast";
import { updateKey } from "../features/userSlice";

function UserPage() {
  const { name, id, apikey, servers } = useSelector(state => state.user);
  const [serverArray, setServerArray] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayKey, setDisplayKey] = useState(apikey);
  const [toast, setToast] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const keyInput = useRef();
  const hostRef = useRef();
  const dispatch = useDispatch();

  const deleteServer = async () => {
    const text = hostRef.current.textContent;
    const index = text.lastIndexOf("호스트 주소 :");
    const url = text.slice(index + 9);

    if (
      window.confirm(
        "서버를 삭제할 경우 해당 트래픽 정보도 같이 삭제됩니다. 삭제하시겠습니까?",
      )
    ) {
      try {
        setDisabled(true);
        const response = await axios.patch(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${url}`,
          {},
          { withCredentials: true },
        );

        setDisabled(false);
        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        window.location.replace("/users");
      } catch (err) {
        console.error(err);
        setDisabled(false);
        return;
      }
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };

  useEffect(() => {
    const contents = servers.map(element => {
      return (
        <S.SubContent key={element.url} className="button" ref={hostRef}>
          <div>
            <S.ServerName>서버 이름 : {element.serverName}</S.ServerName>
            <p>호스트 주소 : {element.url}</p>
          </div>
          <S.copyBtn onClick={deleteServer}>
            <Delete width="20px" height="20px" />
          </S.copyBtn>
        </S.SubContent>
      );
    });

    setServerArray(contents);
  }, [servers]);

  const generateKey = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/apikeys`,
        {},
        { withCredentials: true },
      );

      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      const newApikey = response.data.apikey;
      dispatch(updateKey({ apikey: newApikey }));
      setDisplayKey(newApikey);
      setToast("APIKEY가 재생성되었습니다.");
    } catch (err) {
      console.error(err);
    }
  };

  const copyKey = () => {
    keyInput.current.focus();
    keyInput.current.select();
    document.execCommand("copy");
    setToast("클립보드에 복사되었습니다.");
  };

  return (
    <S.EntryWrapper>
      <PageHeader title="마이페이지" text={errorMessage || null} />
      <S.Main>
        <S.LeftWrapper>
          <section>
            <S.SubTitle>유저정보</S.SubTitle>
            <hr />
            <S.SubContent>
              <TextInform Component={Id} value={name} />
              <TextInform Component={Id} value={id} />
            </S.SubContent>
          </section>
          <section>
            <S.SubTitle>API KEY</S.SubTitle> <hr />
            <S.SubContent className="button">
              <TextInform Component={Key} value={displayKey} ref={keyInput} />
              <S.Btns>
                <S.copyBtn type="button" onClick={generateKey}>
                  <Regenerate width="20px" height="20px" />
                </S.copyBtn>
                <S.copyBtn type="button" onClick={copyKey}>
                  <Copy width="20px" height="20px" />
                </S.copyBtn>
              </S.Btns>
            </S.SubContent>
          </section>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.SubTitle>서버목록</S.SubTitle> <hr />
          {serverArray}
          <Link to="/createserver">
            <S.addBtn type="button">
              {disabled ? <Spinner /> : "+ 서버 추가"}
            </S.addBtn>
          </Link>
        </S.RightWrapper>
        {toast && <Toast setToast={setToast} text={toast} />}
      </S.Main>
    </S.EntryWrapper>
  );
}

export default UserPage;
