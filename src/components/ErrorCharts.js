import { useSelector } from "react-redux";

import * as S from "../styles/TrafficChartStyles";
import ErrorHandler from "../handlers/errorInfoHandlers";
import VerticalChart from "../charts/VerticalChart";
import HorizontalChart from "../charts/HorizontalChart";
import DonutChart from "../charts/DonutChart";
import "../charts/chart.css";

function ErrorCharts({ data }) {
  const { selectDate } = useSelector(state => state.server);
  const chartData = ErrorHandler.totalErrors(data);
  const selectedData = ErrorHandler.dailyErrors(data, selectDate);

  return (
    <S.Main>
      <S.MainChart>
        <S.MainChartBox>
          {chartData && (
            <VerticalChart
              data={chartData.dailyError}
              name="날짜별 에러"
              height={500}
              width={1000}
            />
          )}
        </S.MainChartBox>
      </S.MainChart>
      <S.SubChart>
        <S.SubChartBox>
          {chartData && (
            <DonutChart
              data={
                selectedData ? selectedData.routesError : chartData.routesError
              }
              name="라우팅별 에러"
              width={500}
              height={350}
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
        <S.SubChartBox>
          {chartData && (
            <HorizontalChart
              data={
                selectedData ? selectedData.errorNames : chartData.errorNames
              }
              name="타입별 에러"
              width={500}
              height={350}
              type="error"
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
      </S.SubChart>
    </S.Main>
  );
}

export default ErrorCharts;
