import { render, screen } from "@testing-library/react";
import Toast from "../components/Toast";

describe("Toast Component", () => {
  const mockSetterFunc = jest.fn();
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
    render(<Toast text="toast" setToast={mockSetterFunc} />);

    expect(screen.getByText("toast")).toBeInTheDocument();
  });
});
