import * as S from "../styles/ModalStyles";
import { ReactComponent as CloseArrow } from "../assets/img/angles-right.svg";
import { ReactComponent as OpenArrow } from "../assets/img/angles-left.svg";

function ModalBox({ closeModal, showModal, error, children, animation }) {
  return (
    <S.Container>
      <S.ArrowBtn
        type="button"
        onClick={closeModal}
        className={`${animation ? "active" : "none"} ${error ? "" : "hide"}`}
      >
        {showModal ? <CloseArrow width="15px" /> : <OpenArrow width="15px" />}
      </S.ArrowBtn>
      <S.ModalContainer className={animation ? "active" : "none"}>
        <S.Wrapper>{children}</S.Wrapper>
      </S.ModalContainer>
      {showModal && <S.Canvas onClick={closeModal} />}
    </S.Container>
  );
}

export default ModalBox;
