import Main from "../styles/TrafficChartStyles";
import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import "../utils/chart.css";

function ErrorCharts({ data, selectedData }) {
  return (
    <Main className="chart-area">
      <section className="main-chart">
        {data ? (
          <VerticalChart
            data={data.dailyError}
            name="Daily Errors"
            height={500}
            width={1000}
          />
        ) : (
          <div className="loading-box">
            <div className="spinner" />
            <h1>로딩중입니다.</h1>
          </div>
        )}
      </section>
      <section className="sub-charts">
        <article className="sub1-chart">
          {data && (
            <DonutChart
              data={selectedData ? selectedData.routesError : data.routesError}
              name="sub1"
              width="600"
              height="350"
            />
          )}
        </article>
        <article className="sub2-chart">
          {data && (
            <HorizontalChart
              data={selectedData ? selectedData.errorNames : data.errorNames}
              name="sub2"
              height="350"
              width="500"
              type="error"
            />
          )}
        </article>
      </section>
    </Main>
  );
}

export default ErrorCharts;
