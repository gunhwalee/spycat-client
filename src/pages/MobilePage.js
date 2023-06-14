import LogoHeader from "../components/LogoHeader";
import * as S from "../styles/MobilePageStyle";

function MobilePage() {
  return (
    <S.Wrapper>
      <LogoHeader />
      <S.Text>모바일은 지원되지 않습니다.</S.Text>
      <S.Text>데스크탑으로 접속해 주세요.</S.Text>
    </S.Wrapper>
  );
}

export default MobilePage;
