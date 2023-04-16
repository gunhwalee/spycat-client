import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageHeader from "../components/PageHeader";
import ErrorCharts from "../components/ErrorCharts";
import Handler from "../handlers/trafficHandlers";
import { saveData, deleteData } from "../features/trafficSlice";
import EntryWrapper from "../styles/ChartPageStyles";

function ErrorChartPage() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { apikey } = useSelector(state => state.user);
  const { serverName, url, errorLists, selectDate } = useSelector(
    state => state.server,
  );
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/errors`,
          { withCredentials: true },
        );

        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          saveData({
            serverName: response.data.serverName,
            url: response.data.url,
            errorLists: response.data.errorLists,
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
    if (errorLists) {
      setData(Handler.totalErrors(errorLists));
      setSelectedData(Handler.dailyErrors(errorLists, selectDate));
    }
  }, [errorLists, selectDate]);

  return (
    <EntryWrapper>
      <PageHeader
        title={data ? `Error: ${serverName}` : null}
        text={errorMessage || url}
      />
      <ErrorCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default ErrorChartPage;
