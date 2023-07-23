import { render, screen } from "@testing-library/react";
import LogoHeader from "../components/LogoHeader";

describe("LogoHeader Component", () => {
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
    render(<LogoHeader />);

    const header = screen.getByText("Spy Cat");
    const logo = screen.getByAltText("logo");

    expect(header).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
