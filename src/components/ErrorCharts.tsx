import { useAppSelector } from "../app/hooks";

import * as S from "../styles/TrafficChartStyles";
import { totalErrors, dailyErrors} from "../handlers/errorInfoHandlers";
import VerticalChart from "../charts/VerticalChart";
import HorizontalChart from "../charts/HorizontalChart";
import DonutChart from "../charts/DonutChart";
import "../charts/chart.css";
import { Errors } from "../types/state";

interface ChartData {
  data: Errors[]
}

function ErrorCharts({ data }: ChartData): JSX.Element {
  const { selectDate } = useAppSelector(state => state.server);
  const chartData = totalErrors(data);
  const selectedData = dailyErrors(data, selectDate);

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
              data={selectedData ? selectedData.errorTime : chartData.errorTime}
              name="시간대별 에러"
              width={500}
              height={350}
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
      </S.SubChart>
    </S.Main>
  );
}

export default ErrorCharts;
