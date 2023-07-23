import * as S from "../styles/ModalStyles";
import { ReactComponent as CloseArrow } from "../assets/img/angles-right.svg";
import { ReactComponent as OpenArrow } from "../assets/img/angles-left.svg";

interface ModalProps {
  closeModal: Function,
  showModal: boolean,
  error: string,
  children: any,
  animation: boolean,
}

function ModalBox({ closeModal, showModal, error, children, animation }: ModalProps): JSX.Element {
  return (
    <S.Container>
      <S.ArrowBtn
        type="button"
        onClick={() => closeModal()}
        className={`${animation ? "active" : "none"} ${error ? "" : "hide"}`}
        data-testid="arrow-btn"
      >
        {showModal ? <CloseArrow width="15px" /> : <OpenArrow width="15px" />}
      </S.ArrowBtn>
      <S.ModalContainer className={animation ? "active" : "none"}>
        <S.Wrapper>{children}</S.Wrapper>
      </S.ModalContainer>
      {showModal && <S.Canvas onClick={() => closeModal()} />}
    </S.Container>
  );
}

export default ModalBox;
