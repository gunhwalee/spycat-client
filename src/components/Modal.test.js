import { render } from "@testing-library/react";
import ModalBox from "./Modal";

describe("ModalBox Component", () => {
  function MockComponent() {
    return <div>Mock Component</div>;
  }

  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByText } = render(
      <ModalBox>
        <MockComponent />
      </ModalBox>,
    );

    expect(getByText("Mock Component")).toBeInTheDocument();
  });
});
