import { useSelector } from "react-redux";

import * as S from "../styles/TrafficChartStyles";
import TrafficHandler from "../handlers/trafficInfoHandlers";
import VerticalChart from "../charts/VerticalChart";
import HorizontalChart from "../charts/HorizontalChart";
import DonutChart from "../charts/DonutChart";
import "../charts/chart.css";

function TrafficCharts({ data }) {
  const { selectDate } = useSelector(state => state.server);
  const chartData = TrafficHandler.totalTraffics(data);
  const selectedData = TrafficHandler.dailyTraffics(data, selectDate);

  return (
    <S.Main>
      <S.MainChart>
        <S.MainChartBox>
          {chartData && (
            <VerticalChart
              data={chartData.dailyTraffic}
              name="Daily Traffics"
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
                  ? selectedData.routesTraffic
                  : chartData.routesTraffic
              }
              name="Routes Traffics"
              width={600}
              height={350}
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
        <S.SubChartBox>
          {chartData && (
            <HorizontalChart
              data={
                selectDate ? selectedData.timeTraffic : chartData.timeTraffic
              }
              name="Time Traffics"
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
