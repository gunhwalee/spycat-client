import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "../components/Spinner";
import PageHeader from "../components/PageHeader";
import ErrorCharts from "../components/ErrorCharts";
import { saveData, deleteData } from "../features/trafficSlice";
import * as S from "../styles/ChartPageStyles";

function ErrorChartPage(): JSX.Element {
  const { id } = useAppSelector(state => state.user);
  const { url, errorLists } = useAppSelector(state => state.server);
  const { apikey } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getErrorData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/servers/${apikey}/errors`,
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

    if (id) getErrorData();

    return () => {
      dispatch(deleteData());
    };
  }, [apikey, id, dispatch]);

  return (
    <S.EntryWrapper>
      <PageHeader title={errorLists ? "에러 정보" : null} text={url} />
      {errorLists ? (
        <ErrorCharts data={errorLists} />
      ) : (
        <S.LoadingBox>
          <Spinner />
          <S.LoadingText>{errorMessage || "로딩중입니다."}</S.LoadingText>
        </S.LoadingBox>
      )}
    </S.EntryWrapper>
  );
}

export default ErrorChartPage;
