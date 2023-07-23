import { render, screen } from "@testing-library/react";
import TextInform from "../components/TextInform";
import Id from "../assets/img/id.svg";

describe("TextInform Component", () => {
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
      <TextInform value="ABCD" path={Id} />,
    );

    expect(screen.getByDisplayValue("ABCD")).toBeInTheDocument();
  });
});
