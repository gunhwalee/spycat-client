import { useState, useEffect } from "react";

import { TIME } from "../assets/constants";
import mockData from "../charts/MockData";
import PageHeader from "../components/PageHeader";
import * as S from "../styles/ErrorListPageStyles";
import ModalBox from "../components/Modal";
import ExampleDetailPage from "./ExampleDetailPage";
import Handler from "../handlers/errorInfoHandlers";

function ExampleListPage() {
  const { errorLists } = mockData;
  const [errorArray, setErrorArray] = useState(null);
  const [selectedError, setSelectedError] = useState(null);
  const [buttonLists, setButtonLists] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [type, setType] = useState("All");

  useEffect(() => {
    if (errorLists) {
      const errorBoxes = errorLists.map(element => {
        if (type !== "All" && element.errorName !== type) return;
        const date = new Date(element.createdAt.toString());
        const errorTime = String(date).slice(0, 24);

        return (
          <S.ErrorBox
            key={element._id}
            onClick={() => {
              setSelectedError(element._id);
              setShowModal(true);
              setTimeout(() => {
                setAnimation(true);
              }, 10);
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
      setButtonLists(Handler.ErrorNameHandler(errorLists));
    }
  }, [errorLists, type]);

  const showErrorNames = event => {
    const selectType = event.target.textContent.split(" ");
    setType(selectType[0]);
  };

  const handleModal = () => {
    if (showModal) {
      setAnimation(false);
      setTimeout(() => {
        setShowModal(false);
      }, TIME.DETAIL_TRANSITION * 1000);
    } else {
      setAnimation(true);
      setShowModal(true);
    }
  };

  return (
    <S.EntryWrapper>
      <PageHeader title="에러 목록" />
      <S.Main>
        <S.Nav onClick={showErrorNames}>
          <S.Button className={type === "All" ? "select" : ""}>
            All {errorLists && errorLists.length}
          </S.Button>
          {buttonLists &&
            buttonLists.map(element => {
              return (
                <S.Button
                  key={element.name}
                  className={type === element.name ? "select" : ""}
                >{`${element.name} ${element.value.length}`}</S.Button>
              );
            })}
        </S.Nav>
        <section>
          <hr />
          {errorArray}
        </section>
      </S.Main>
      {showModal && (
        <ModalBox
          closeModal={handleModal}
          showModal={showModal}
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
