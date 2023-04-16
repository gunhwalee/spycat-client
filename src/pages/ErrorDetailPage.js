import { useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import DetailChart from "../utils/DetailChart";
import mockData from "../utils/MockData";
import Handler from "../handlers/trafficHandlers";
import * as S from "../styles/ErrorDetailPageStyles";

function ErrorDetailPage({ error }) {
  const { errorLists } = useSelector(state => state.server);
  const data = errorLists.find(element => element._id === error);
  console.log(data);
  const chartData = Handler.totalTraffics(mockData.traffics);
  return (
    <div>
      <PageHeader title="Type Error" />
      <S.Main>
        <S.Section>
          <S.Header>발생 시간</S.Header>
          <S.Content>
            <div>
              Type Error는 Fri Apr 14 2023 22:19:67, mytestserver1.com 에서
              발생했습니다.
            </div>
          </S.Content>
        </S.Section>
        <S.Section>
          <S.Header>에러 추이</S.Header>
          <S.Content>
            <DetailChart
              name="같은 종류의 에러는 지난 14일 동안 8건 발생했습니다."
              data={chartData.dailyTraffic}
              width={700}
              height={250}
            />
          </S.Content>
        </S.Section>
        <S.Section>
          <S.Header>에러 스택</S.Header>
          <S.Content>
            <S.Description>
              아래에 해당 에러에 대한 스택을 확인하세요
            </S.Description>
            <S.StackBox>
              Error: Not Found at
              /Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/app.js:56:15 at
              Layer.handle [as handle_request]
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/express/lib/router/layer.js:95:5)
              at trim_prefix
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/express/lib/router/index.js:328:13)
              at
              /Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/express/lib/router/index.js:286:9
              at Function.process_params
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/express/lib/router/index.js:346:12)
              at next
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/express/lib/router/index.js:280:10)
              at SendStream.error
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/serve-static/index.js:121:7)
              at SendStream.emit (node:events:513:28) at SendStream.error
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/send/index.js:270:17)
              at SendStream.onStatError
              (/Users/igeonhwa/Desktop/bootcamp14/bootcamp14-w07/node_modules/send/index.js:417:12)
            </S.StackBox>
          </S.Content>
        </S.Section>
      </S.Main>
    </div>
  );
}

export default ErrorDetailPage;
