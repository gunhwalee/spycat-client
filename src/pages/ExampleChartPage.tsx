import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";

import TrafficCharts from "../components/TrafficCharts";
import mockData from "../charts/MockData";
import PageHeader from "../components/PageHeader";
import * as S from "../styles/ChartPageStyles";
import ErrorCharts from "../components/ErrorCharts";
import { deleteData } from "../features/trafficSlice";

function ExampleChartPage() {
  const { traffics, errorLists } = mockData;
  const { type } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => { dispatch(deleteData()) };
  }, [type, dispatch]);

  return (
    <S.EntryWrapper>
      <PageHeader
        title="Example Chart"
        text="로그인 후 SpyCat을 이용해보세요"
      />
      {type === "errors" && <ErrorCharts data={errorLists} />}
      {(type === undefined || type === "traffics") && (
        <TrafficCharts data={traffics} />
      )}
    </S.EntryWrapper>
  );
}

export default ExampleChartPage;
