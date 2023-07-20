import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "../components/Spinner";
import PageHeader from "../components/PageHeader";
import TrafficCharts from "../components/TrafficCharts";
import { saveData, deleteData } from "../features/trafficSlice";
import * as S from "../styles/ChartPageStyles";

function TrafficChartPage(): JSX.Element {
  const { id } = useAppSelector(state => state.user);
  const { url, traffics } = useAppSelector(state => state.server);
  const { apikey } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/servers/${apikey}/traffics`,
          { withCredentials: true },
        );

        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          saveData({
            serverName: response.data.serverName,
            url: response.data.url,
            traffics: response.data.traffics,
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
  }, [apikey, dispatch, id]);

  return (
    <S.EntryWrapper>
      <PageHeader title={traffics ? "트래픽 정보" : null} text={url} />
      {traffics ? (
        <TrafficCharts data={traffics} />
      ) : (
        <S.LoadingBox>
          <Spinner />
          <S.LoadingText>{errorMessage || "로딩중입니다."}</S.LoadingText>
        </S.LoadingBox>
      )}
    </S.EntryWrapper>
  );
}

export default TrafficChartPage;
