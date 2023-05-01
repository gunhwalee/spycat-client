import { render } from "@testing-library/react";
import Toast from "../components/Toast";

describe("Toast Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByText } = render(<Toast text="toast" />);

    expect(getByText("toast")).toBeInTheDocument();
  });
});
