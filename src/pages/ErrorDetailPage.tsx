import { useAppSelector } from "../app/hooks";

import PageHeader from "../components/PageHeader";
import DetailChart from "../charts/DetailChart";
import { totalErrors } from "../handlers/errorInfoHandlers";
import * as S from "../styles/ErrorDetailPageStyles";

function ErrorDetailPage({ error }: { error: string }): JSX.Element {
  const { errorLists } = useAppSelector(state => state.server);
  if (error === null) return <></>;
  const data = errorLists?.find(element => element._id === error)!;
  const time = String(new Date(data.createdAt.toString())).slice(0, 24);
  const filterData = errorLists?.filter(
    element => element.errorName === data.errorName,
  )!;
  const chartData = totalErrors(filterData);

  return (
    <>
      <PageHeader title={data.errorName} />
      <S.Main>
        <S.Section>
          <S.Header>발생 시간</S.Header>
          <S.Content>
            <div>
              {data.errorName}는 {data.host} 에서 {time} 발생했습니다.
            </div>
          </S.Content>
        </S.Section>
        <S.Section>
          <S.Header>에러 추이</S.Header>
          <S.Content>
            <DetailChart
              name={`같은 종류의 에러는 지난 28일 동안 ${filterData.length}건 발생했습니다.`}
              data={chartData.dailyError}
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
            <S.StackBox>{data.errorStack}</S.StackBox>
          </S.Content>
        </S.Section>
      </S.Main>
    </>
  );
}

export default ErrorDetailPage;
