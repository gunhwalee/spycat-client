import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import LogoHeader from "../components/LogoHeader";
import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import { saveData, deleteData } from "../features/trafficSlice";
import EntryWrapper from "../styles/ChartPageStyles";

function TrafficPage() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { apikey } = useSelector(state => state.user);
  const { serverName, url, traffics, selectDate } = useSelector(
    state => state.traffic,
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
  }, [traffics]);

  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <Link to="/">
          <LogoHeader size="30px" />
        </Link>
        <h1 className="server-title">{serverName}</h1>
        <h1 className="server-url">{errorMessage || url}</h1>
      </header>
      <TrafficCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default TrafficPage;
