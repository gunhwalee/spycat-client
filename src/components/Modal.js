import * as S from "../styles/ModalStyles";
import { ReactComponent as Arrow } from "../assets/img/angles-right.svg";

function ModalBox({ setShowModal, children }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <S.ArrowBtn type="button" onClick={closeModal}>
        <Arrow width="15px" />
      </S.ArrowBtn>
      <S.ModalContainer>
        <S.Wrapper>{children}</S.Wrapper>
      </S.ModalContainer>
      <S.Canvas onClick={closeModal} />
    </>
  );
}

export default ModalBox;
