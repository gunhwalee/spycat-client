import { fireEvent, render, screen } from "@testing-library/react";
import ModalBox from "../components/Modal";

describe("ModalBox Component", () => {
  const MockComponent = () => {
    return <div>Mock Component</div>;
  };
  const mockCloseModal = jest.fn();
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    render(
      <ModalBox
        closeModal={mockCloseModal}
        showModal={true}
        error={""}
        animation={true}
      >
        <MockComponent />
      </ModalBox>,
    );

    expect(screen.getByText("Mock Component")).toBeInTheDocument();
  });

  it("버튼을 눌렀을 때 closeModal 함수가 정상적으로 호출되는지 확인합니다.", () => {
    render(
      <ModalBox
        closeModal={mockCloseModal}
        showModal={true}
        error={""}
        animation={true}
      >
        <MockComponent />
      </ModalBox>,
    );

    const arrowBtn = screen.getByTestId("arrow-btn");
    fireEvent(arrowBtn, new MouseEvent("click"));

    expect(mockCloseModal.mock.calls).toHaveLength(1);
  });
});
