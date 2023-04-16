import * as S from "../styles/TrafficChartStyles";

import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import Spinner from "./Spinner";
import "../utils/chart.css";

function ErrorCharts({ data, selectedData }) {
  return (
    <S.Main>
      <S.MainChart>
        <S.MainChartBox>
          {data ? (
            <VerticalChart
              data={data.dailyError}
              name="Daily Error"
              height={500}
              width={1000}
            />
          ) : (
            <S.LoadingBox>
              <Spinner />
              <S.LoadingText>로딩중입니다.</S.LoadingText>
            </S.LoadingBox>
          )}
        </S.MainChartBox>
      </S.MainChart>
      <S.SubChart>
        <S.SubChartBox>
          {data && (
            <DonutChart
              data={selectedData ? selectedData.routesError : data.routesError}
              name="Routes Error"
              width={600}
              height={350}
            />
          )}
        </S.SubChartBox>
        <S.SubChartBox>
          {data && (
            <HorizontalChart
              data={selectedData ? selectedData.errorNames : data.errorNames}
              name="Time Error"
              width={500}
              height={350}
              type="error"
            />
          )}
        </S.SubChartBox>
      </S.SubChart>
    </S.Main>
  );
}

export default ErrorCharts;
