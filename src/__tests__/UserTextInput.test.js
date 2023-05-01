import { fireEvent, render } from "@testing-library/react";
import UserTextInput from "../components/UserTextInput";
import { ReactComponent as Id } from "../assets/img/id.svg";

describe("UserTextInput Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByPlaceholderText, getByText } = render(
      <UserTextInput Component={Id} placeholder="ABCD" />,
    );

    expect(getByPlaceholderText("ABCD")).toBeInTheDocument();
    expect(getByText(/id/i)).toBeInTheDocument();
  });

  it("focus 이벤트가 감지되는지 확인합니다.", () => {
    const mockFn = jest.fn();
    const { getByPlaceholderText } = render(
      <UserTextInput setFocus={mockFn} placeholder="ABCD" />,
    );

    fireEvent.focus(getByPlaceholderText("ABCD"));
    expect(mockFn.mock.calls.length).toBe(1);

    fireEvent.blur(getByPlaceholderText("ABCD"));
    expect(mockFn.mock.calls.length).toBe(2);
  });

  it("RuleBox가 정상적으로 렌더링 되는지 확인합니다.", () => {
    const { getByText } = render(<UserTextInput focus rule="rule" />);

    expect(getByText("rule")).toBeInTheDocument();
  });
});
