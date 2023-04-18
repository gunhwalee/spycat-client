import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageHeader from "../components/PageHeader";
import * as S from "../styles/ErrorListPageStyles";
import { saveData, deleteData } from "../features/trafficSlice";
import ModalBox from "../components/Modal";
import ErrorDetailPage from "./ExampleDetailPage";
import Handler from "../handlers/errorInfoHandlers";
import Spinner from "../components/Spinner";

function ErrorListPage() {
  const { errorLists } = useSelector(state => state.server);
  const { apikey } = useSelector(state => state.user);
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorArray, setErrorArray] = useState(null);
  const [selectedError, setSelectedError] = useState(null);
  const [buttonLists, setButtonLists] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [type, setType] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    const getErrorData = async () => {
      try {
        setDisabled(true);
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/errors`,
          { withCredentials: true },
        );

        setDisabled(false);
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

    getErrorData();

    return () => {
      dispatch(deleteData());
    };
  }, []);

  useEffect(() => {
    if (errorLists) {
      const errorBoxes = errorLists.map(element => {
        if (type !== "All" && element.errorName !== type) return;
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
              <div>{errorTime}</div>
              <div>||</div>
              <div>{element.host}</div>
            </S.ErrorDetail>
          </S.ErrorBox>
        );
      });

      setErrorArray(errorBoxes);
      setButtonLists(Handler.ErrorNameHandler(errorLists));
    }
  }, [errorLists, type]);

  const showErrorNames = event => {
    const selectType = event.target.textContent.split(" ");
    setType(selectType[0]);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.EntryWrapper>
      <PageHeader title="에러 목록" text={errorMessage} />
      {disabled ? (
        <S.SpinnerBox>
          <Spinner size={50} />
          <S.LoadingText>로딩중입니다.</S.LoadingText>
        </S.SpinnerBox>
      ) : (
        <S.Main>
          <S.Nav onClick={showErrorNames}>
            <S.Button className={type === "All" ? "select" : ""}>
              All {errorLists && errorLists.length}
            </S.Button>
            {buttonLists &&
              buttonLists.map(element => {
                return (
                  <S.Button
                    key={element.name}
                    className={type === element.name ? "select" : ""}
                  >{`${element.name} ${element.value.length}`}</S.Button>
                );
              })}
          </S.Nav>
          <section>
            <hr />
            {errorArray}
          </section>
        </S.Main>
      )}
      <ModalBox
        closeModal={handleModal}
        showModal={showModal}
        error={selectedError}
      >
        <ErrorDetailPage error={selectedError} />
      </ModalBox>
    </S.EntryWrapper>
  );
}

export default ErrorListPage;
