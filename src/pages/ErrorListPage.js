import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageHeader from "../components/PageHeader";
import * as S from "../styles/ErrorListPageStyles";
import { saveData, deleteData } from "../features/trafficSlice";
import ModalBox from "../components/Modal";
import ErrorDetailPage from "./ErrorDetailPage";

function ErrorListPage() {
  const { errorLists } = useSelector(state => state.server);
  const { apikey } = useSelector(state => state.user);
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorArray, setErrorArray] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedError, setSelectedError] = useState(null);
  const [buttonArray, setButtonArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/errors`,
          { withCredentials: true },
        );

        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          saveData({
            serverName: response.data.serverName,
            url: response.data.url,
            errorLists: response.data.errorLists,
          }),
        );
      } catch (err) {
        console.error(err);
        return setErrorMessage(
          "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
        );
      }
    };

    if (id) getTrafficData();

    return () => {
      dispatch(deleteData());
    };
  }, [id]);

  useEffect(() => {
    if (errorLists) {
      const errorBoxes = errorLists.map(element => {
        if (!buttonArray.includes(element.errorName)) {
          setButtonArray([...buttonArray, element.errorName]);
        }

        const date = new Date(element.createdAt.toString());
        const errorTime = String(date).slice(0, 24);

        return (
          <S.ErrorBox
            key={element._id}
            onClick={() => {
              setSelectedError(element._id);
              setShowModal(true);
            }}
          >
            <S.ErrorTitle>{element.errorName}</S.ErrorTitle>
            <S.ErrorMessage>{element.errorMessage}</S.ErrorMessage>
            <S.ErrorDetail>
              <div className="time">{errorTime}</div>
              <div>| {element.host}</div>
            </S.ErrorDetail>
          </S.ErrorBox>
        );
      });

      setErrorArray(errorBoxes);
    }
  }, [errorLists]);

  return (
    <S.EntryWrapper>
      <PageHeader title="에러 목록" text={errorMessage} />
      <S.Main>
        <S.Nav>
          <S.Button>All {errorLists && errorLists.length}</S.Button>
          {buttonArray.length !== 0 &&
            buttonArray.map(element => {
              return <S.Button key={element}>{element}</S.Button>;
            })}
          <S.Button>Type Error 3</S.Button>
        </S.Nav>
        <section>
          <hr />
          {errorArray}
        </section>
      </S.Main>
      {showModal && (
        <ModalBox setShowModal={setShowModal}>
          <ErrorDetailPage error={selectedError} />
        </ModalBox>
      )}
    </S.EntryWrapper>
  );
}

export default ErrorListPage;
