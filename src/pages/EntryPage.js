import { useSelector } from "react-redux";

import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import mockData from "../utils/MockData";
import PageHeader from "../components/PageHeader";
import EntryWrapper from "../styles/ChartPageStyles";

function EntryPage() {
  const { selectDate } = useSelector(state => state.server);
  const data = Handler.totalTraffics(mockData.traffics);
  const selectedData = Handler.dailyTraffics(mockData.traffics, selectDate);

  return (
    <EntryWrapper>
      <PageHeader title="Example Chart" text="서버를 선택하세요." />
      <TrafficCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default EntryPage;
