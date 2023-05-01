import { render } from "@testing-library/react";
import TextInform from "../components/TextInform";
import { ReactComponent as Id } from "../assets/img/id.svg";

describe("TextInform Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByDisplayValue, getByText } = render(
      <TextInform value="ABCD" Component={Id} />,
    );

    expect(getByDisplayValue("ABCD")).toBeInTheDocument();
    expect(getByText(/id/i)).toBeInTheDocument();
  });
});
