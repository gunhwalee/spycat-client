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
import { setAxios } from "../features/userSlice";

function UserPage() {
  const { name, id, servers } = useSelector(state => state.user);
  const [serverArray, setServerArray] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const hostRef = useRef();
  const dispatch = useDispatch();

  const deleteServer = async () => {
    const text = hostRef.current.textContent;
    const index = text.lastIndexOf("호스트 주소 :");
    const url = text.slice(index + 9, text.lastIndexOf(" "));

    if (
      window.confirm(
        "서버를 삭제할 경우 해당 트래픽 정보도 같이 삭제됩니다. 삭제하시겠습니까?",
      )
    ) {
      try {
        setDisabled(true);
        const response = await axios.patch(
          `${process.env.REACT_APP_SPYCAT_SERVER}/servers/${url}`,
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

  const generateKey = async apikey => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_SPYCAT_SERVER}/servers/apikey/${apikey}`,
        {},
        { withCredentials: true },
      );

      if (response.data.result === "error") {
        return setErrorMessage(response.data.message);
      }

      dispatch(setAxios());
      setToast("APIKEY가 재생성되었습니다.");
    } catch (err) {
      console.error(err);
    }
  };

  const copyKey = async apikey => {
    try {
      await navigator.clipboard.writeText(apikey);
      setToast("클립보드에 복사되었습니다.");
    } catch (err) {
      console.error(err);
      setToast("복사기능이 지원되지 않는 브라우저입니다.");
    }
  };

  useEffect(() => {
    const contents = servers.map(element => {
      return (
        <S.SubContent key={element.url} className="server" ref={hostRef}>
          <S.contentBox>
            <div>
              <S.ServerName>서버 이름 : {element.serverName}</S.ServerName>
              <p>호스트 주소 : {element.url}</p>
            </div>
            <S.copyBtn onClick={deleteServer}>
              <Delete width="20px" height="20px" />
            </S.copyBtn>
          </S.contentBox>
          <S.contentBox className="last">
            <div>
              <Key width="15px" height="15px" /> {element.apikey}
            </div>
            <S.Btns>
              <S.copyBtn
                type="button"
                onClick={() => generateKey(element.apikey)}
              >
                <Regenerate width="20px" height="20px" />
              </S.copyBtn>
              <S.copyBtn type="button" onClick={() => copyKey(element.apikey)}>
                <Copy width="20px" height="20px" />
              </S.copyBtn>
            </S.Btns>
          </S.contentBox>
        </S.SubContent>
      );
    });

    setServerArray(contents);
  }, [servers]);

  return (
    <S.EntryWrapper>
      <PageHeader title="마이페이지" text={errorMessage || null} />
      <S.Main>
        <S.LeftWrapper>
          <section>
            <S.SubTitle>유저정보</S.SubTitle> <hr />
            <S.SubContent>
              <TextInform Component={Id} value={name} />
              <TextInform Component={Id} value={id} />
            </S.SubContent>
          </section>
          <section>
            <S.SubTitle>사용 방법</S.SubTitle> <hr />
            <S.TextBox>
              1. 우측의 서버 추가 버튼을 눌러 서버를 추가하세요.
            </S.TextBox>
            <S.TextBox>
              2. 등록한 서버의 소스코드에서{" "}
              <a href="https://www.npmjs.com/package/spycat-tracker">
                Spycat-Tracker
              </a>
              패키지를 설치하세요.
            </S.TextBox>
            <S.TextBox>
              3. trafficParser함수는 소스코드의 라우팅 분기점 보다 위쪽에서
              호출해야합니다.
            </S.TextBox>
            <S.TextBox>
              4. errorParser함수는 소스코드의 에러처리기 바로 위에
              호출해야합니다.
            </S.TextBox>
            <S.TextBox>
              5. 각 함수의 인수로 서버마다 발급된 APIKEY를 넣어주세요.
            </S.TextBox>
            <S.TextBox>
              📋자세한 사용방법은 README파일을 참고해주세요.
            </S.TextBox>
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
