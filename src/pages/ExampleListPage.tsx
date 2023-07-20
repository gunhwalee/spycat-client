import { useState, useEffect } from "react";

import mockData from "../charts/MockData";
import PageHeader from "../components/PageHeader";
import * as S from "../styles/ErrorListPageStyles";
import ModalBox from "../components/Modal";
import ExampleDetailPage from "./ExampleDetailPage";
import { ErrorNameHandler } from "../handlers/errorInfoHandlers";
import { ErrorButtonList } from "../types/components"
import useAnimation from "../handlers/useAnimation";

function ExampleListPage(): JSX.Element {
  const { errorLists } = mockData;
  const [errorArray, setErrorArray] = useState<any>();
  const [selectedError, setSelectedError] = useState<string>("");
  const [buttonLists, setButtonLists] = useState<ErrorButtonList[]>([]);
  const [type, setType] = useState<string>("All");
  const { showUi, animation, handler } = useAnimation();

  useEffect(() => {
    if (errorLists) {
      const errorBoxes = errorLists.map(element => {
        if (type !== "All" && element.errorName !== type) return undefined;
        const date = new Date(element.createdAt.toString());
        const errorTime = String(date).slice(0, 24);

        return (
          <S.ErrorBox
            key={element._id}
            onClick={() => {
              setSelectedError(element._id);
              handler();
            }}
          >
            <S.ErrorTitle>{element.errorName}</S.ErrorTitle>
            <S.ErrorMessage>{element.errorMessage}</S.ErrorMessage>
            <S.ErrorDetail>
              <div>{errorTime}</div>
              <div className="divider">||</div>
              <div>{element.host}</div>
            </S.ErrorDetail>
          </S.ErrorBox>
        );
      });

      setErrorArray(errorBoxes);
      setButtonLists(ErrorNameHandler(errorLists));
    }
  }, [errorLists, type, handler]);

  const showErrorNames = (event: React.MouseEvent<HTMLElement>) => {
    const selectType = (event.target as HTMLElement).textContent?.split(" ");

    if (selectType) setType(selectType[0]);
  };

  return (
    <S.EntryWrapper>
      <PageHeader title="에러 목록" />
      <S.Main>
        <S.Nav onClick={(e) => showErrorNames(e)}>
          <S.Button className={type === "All" ? "select" : ""}>
            All {errorLists && errorLists.length}
          </S.Button>
          {buttonLists &&
            buttonLists.map(element => {
              return (
                <S.Button
                  key={element.name}
                  className={type === element.name ? "select" : ""}
                >{`${element.name} ${element.value}`}</S.Button>
              );
            })}
        </S.Nav>
        <section>
          <hr />
          {errorArray}
        </section>
      </S.Main>
      {showUi && (
        <ModalBox
          closeModal={handler}
          showModal={showUi}
          error={selectedError}
          animation={animation}
        >
          <ExampleDetailPage error={selectedError} />
        </ModalBox>
      )}
    </S.EntryWrapper>
  );
}

export default ExampleListPage;
