import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "../components/PageHeader";

describe("PageHeader Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <PageHeader title="title" text="text" />
      </BrowserRouter>,
    );

    const title = getByText("title");
    const text = getByText("text");
    const logo = getByAltText("logo");

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
