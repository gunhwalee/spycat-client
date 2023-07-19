import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

import LogoHeader from "../components/LogoHeader";
import Handler from "../handlers/trafficInfoHandlers";
import VerticalChart from "../charts/VerticalChart";
import MockData from "../charts/MockData";
import * as S from "../styles/HomePageStyles";
import * as G from "../styles/GlobalStyles";

function HomePage():JSX.Element {
  const { name } = useAppSelector(state => state.user);
  const data = Handler.totalTraffics(MockData.traffics);

  return (
    <S.EntryWrapper>
      <LogoHeader />
      <S.Main>
        <VerticalChart
          name="Example"
          data={data.dailyTraffic}
          width={1000}
          height={500}
        />
      </S.Main>
      {name ? (
        <S.Description>서버를 선택해 트래픽을 확인해보세요.</S.Description>
      ) : (
        <S.Footer className="footer">
          <Link to="/login">
            <G.Button type="button" className="move-login">
              로그인
            </G.Button>
          </Link>
          <Link to="/signup">
            <G.LinkSpan className="move-signup">회원가입</G.LinkSpan>
          </Link>
        </S.Footer>
      )}
    </S.EntryWrapper>
  );
}

export default HomePage;
