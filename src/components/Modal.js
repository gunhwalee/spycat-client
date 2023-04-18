import * as S from "../styles/ModalStyles";
import { ReactComponent as CloseArrow } from "../assets/img/angles-right.svg";
import { ReactComponent as OpenArrow } from "../assets/img/angles-left.svg";

function ModalBox({ closeModal, showModal, error, children }) {
  return (
    <S.Container>
      <S.ArrowBtn
        type="button"
        onClick={closeModal}
        className={`${showModal ? "active" : ""} ${error ? "" : "none"}`}
      >
        {showModal ? <CloseArrow width="15px" /> : <OpenArrow width="15px" />}
      </S.ArrowBtn>
      <S.ModalContainer className={showModal ? "active" : ""}>
        <S.Wrapper>{children}</S.Wrapper>
      </S.ModalContainer>
      {showModal && <S.Canvas onClick={closeModal} />}
    </S.Container>
  );
}

export default ModalBox;
