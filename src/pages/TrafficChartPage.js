import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageHeader from "../components/PageHeader";
import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import { saveData, deleteData } from "../features/trafficSlice";
import EntryWrapper from "../styles/ChartPageStyles";

function TrafficChartPage() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { apikey } = useSelector(state => state.user);
  const { serverName, url, traffics, selectDate } = useSelector(
    state => state.server,
  );
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/traffics`,
          { withCredentials: true },
        );

        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          saveData({
            serverName: response.data.serverName,
            url: response.data.url,
            traffics: response.data.traffics,
          }),
        );
      } catch (err) {
        console.error(err);
        return setErrorMessage(
          "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
        );
      }
    };

    if (id) getTrafficData();

    return () => {
      setData(null);
      dispatch(deleteData());
    };
  }, [id]);

  useEffect(() => {
    if (traffics) {
      setData(Handler.totalTraffics(traffics));
      setSelectedData(Handler.dailyTraffics(traffics, selectDate));
    }
  }, [traffics, selectDate]);

  return (
    <EntryWrapper>
      <PageHeader
        title={data ? `Traffic: ${serverName}` : null}
        text={errorMessage || url}
      />
      <TrafficCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default TrafficChartPage;
