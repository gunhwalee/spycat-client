import { useAppSelector } from "../app/hooks";

import * as S from "../styles/TrafficChartStyles";
import { totalTraffics, dailyTraffics} from "../handlers/trafficInfoHandlers";
import VerticalChart from "../charts/VerticalChart";
import HorizontalChart from "../charts/HorizontalChart";
import DonutChart from "../charts/DonutChart";
import "../charts/chart.css";
import { Traffics } from "../types/state";

interface ChartData {
  data: Traffics[]
}

function TrafficCharts({ data }: ChartData): JSX.Element {
  const { selectDate } = useAppSelector(state => state.server);
  const chartData = totalTraffics(data);
  const selectedData = dailyTraffics(data, selectDate);

  return (
    <S.Main>
      <S.MainChart>
        <S.MainChartBox>
          {chartData && (
            <VerticalChart
              data={chartData.dailyTraffic}
              name="날짜별 트래픽"
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
                selectDate
                ? selectedData?.routesTraffic!
                : chartData.routesTraffic!
              }
              name="라우팅별 트래픽"
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
                selectDate
                ? selectedData?.timeTraffic!
                : chartData.timeTraffic
              }
              name="시간대별 트래픽"
              height={350}
              width={500}
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
      </S.SubChart>
    </S.Main>
  );
}

export default TrafficCharts;
