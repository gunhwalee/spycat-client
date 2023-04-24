import { render } from "@testing-library/react";
import LogoHeader from "./LogoHeader";

describe("LogoHeader Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByText, getByAltText } = render(<LogoHeader />);

    const header = getByText("Spy Cat");
    const logo = getByAltText("logo");

    expect(header).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
