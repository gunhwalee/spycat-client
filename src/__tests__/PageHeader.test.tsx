import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "../components/PageHeader";

describe("PageHeader Component", () => {
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
      <BrowserRouter>
        <PageHeader title="title" text="text" />
      </BrowserRouter>,
    );

    const title = screen.getByText("title");
    const text = screen.getByText("text");
    const logo = screen.getByAltText("logo");

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
