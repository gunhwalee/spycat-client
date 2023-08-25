import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageHeader from "../components/PageHeader";
import * as S from "../styles/ErrorListPageStyles";
import { saveData, deleteData } from "../features/trafficSlice";
import ModalBox from "../components/Modal";
import ErrorDetailPage from "./ErrorDetailPage";
import { ErrorNameHandler } from "../handlers/errorInfoHandlers";
import Spinner from "../components/Spinner";
import useAnimation from "../handlers/useAnimation";
import { ErrorButtonList } from "../types/components";

function ErrorListPage() {
  const { errorLists } = useAppSelector((state) => state.server);
  const { apikey } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorArray, setErrorArray] = useState<any>(null);
  const [selectedError, setSelectedError] = useState<string>("");
  const [buttonLists, setButtonLists] = useState<ErrorButtonList[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [type, setType] = useState<string>("All");
  const { showUi, animation, handler } = useAnimation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getErrorData = async () => {
      try {
        setDisabled(true);
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/servers/${apikey}/errors`,
          { withCredentials: true }
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
          })
        );
      } catch (err) {
        console.error(err);
        return setErrorMessage(
          "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요."
        );
      }
    };

    getErrorData();

    return () => {
      dispatch(deleteData());
    };
  }, [apikey, dispatch]);

  useEffect(() => {
    if (errorLists) {
      const errorBoxes = errorLists.map((element) => {
        if (type !== "All" && element.errorName !== type) return undefined;
        const date = new Date(element.createdAt.toString());
        const errorTime = String(date).slice(0, 24);

        return (
          <S.ErrorBox
            key={element._id}
            onClick={() => {
              setSelectedError(element._id!);
              handler();
            }}
          >
            <S.ErrorTitle>{element.errorName}</S.ErrorTitle>
            <S.ErrorMessage>{element.errorMessage}</S.ErrorMessage>
            <S.ErrorDetail>
              <div>{errorTime}</div>
              <div className="divider">||</div>
              <div>{element.host}</div>
            </S.ErrorDetail>
          </S.ErrorBox>
        );
      });

      setErrorArray(errorBoxes);
      setButtonLists(ErrorNameHandler(errorLists));
    }
  }, [errorLists, type]);

  const showErrorNames = (event: React.MouseEvent<HTMLElement>) => {
    const selectType = (event.target as HTMLElement).textContent?.split(" ");

    if (selectType) setType(selectType[0]);
  };

  return (
    <S.EntryWrapper>
      <PageHeader title="에러 목록" text={errorMessage} />
      {disabled ? (
        <S.SpinnerBox>
          <Spinner />
          <S.LoadingText>로딩중입니다.</S.LoadingText>
        </S.SpinnerBox>
      ) : (
        <S.Main>
          <S.Nav onClick={showErrorNames}>
            <S.Button className={type === "All" ? "select" : ""}>
              All {errorLists && errorLists.length}
            </S.Button>
            {buttonLists &&
              buttonLists.map((element) => {
                return (
                  <S.Button
                    key={element.name}
                    className={type === element.name ? "select" : ""}
                  >{`${element.name} ${element.value}`}</S.Button>
                );
              })}
          </S.Nav>
          <section>
            <hr />
            {errorArray}
          </section>
        </S.Main>
      )}
      {showUi && (
        <ModalBox
          closeModal={handler}
          showModal={showUi}
          error={selectedError}
          animation={animation}
        >
          <ErrorDetailPage error={selectedError} />
        </ModalBox>
      )}
    </S.EntryWrapper>
  );
}

export default ErrorListPage;
