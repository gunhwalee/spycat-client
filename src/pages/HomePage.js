import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LogoHeader from "../components/LogoHeader";
import Handler from "../handlers/trafficHandlers";
import VerticalChart from "../utils/VerticalChart";
import MockData from "../utils/MockData";
import * as S from "../styles/HomePageStyles";
import * as G from "../styles/GlobalStyles";

function HomePage() {
  const { name } = useSelector(state => state.user);
  const data = Handler.totalTraffics(MockData.traffics);

  return (
    <S.EntryWrapper>
      <LogoHeader size="60px" />
      <S.Main>
        <VerticalChart
          name="Example"
          data={data.dailyTraffic}
          width={1000}
          height={500}
        />
      </S.Main>
      {!name && (
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
