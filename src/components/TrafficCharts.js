import * as S from "../styles/TrafficChartStyles";

import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import Spinner from "./Spinner";
import "../utils/chart.css";

function TrafficCharts({ data, selectedData }) {
  return (
    <S.Main>
      <S.MainChart>
        <S.MainChartBox>
          {data ? (
            <VerticalChart
              data={data.dailyTraffic}
              name="Daily Traffics"
              height={500}
              width={1000}
            />
          ) : (
            <S.LoadingBox>
              <Spinner size={50} />
              <S.LoadingText>로딩중입니다.</S.LoadingText>
            </S.LoadingBox>
          )}
        </S.MainChartBox>
      </S.MainChart>
      <S.SubChart>
        <S.SubChartBox>
          {data && (
            <DonutChart
              data={
                selectedData ? selectedData.routesTraffic : data.routesTraffic
              }
              name="Routes Traffics"
              width={600}
              height={350}
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
        <S.SubChartBox>
          {data && (
            <HorizontalChart
              data={selectedData ? selectedData.timeTraffic : data.timeTraffic}
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
