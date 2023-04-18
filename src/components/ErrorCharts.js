import * as S from "../styles/TrafficChartStyles";

import VerticalChart from "../charts/VerticalChart";
import HorizontalChart from "../charts/HorizontalChart";
import DonutChart from "../charts/DonutChart";
import Spinner from "./Spinner";
import "../charts/chart.css";

function ErrorCharts({ data, selectedData, errorMessage }) {
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
              <Spinner size={50} />
              <S.LoadingText>{errorMessage || "로딩중입니다."}</S.LoadingText>
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
              key={Math.random()}
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
              key={Math.random()}
            />
          )}
        </S.SubChartBox>
      </S.SubChart>
    </S.Main>
  );
}

export default ErrorCharts;
