import { fireEvent, render, screen } from "@testing-library/react";
import UserTextInput from "../components/UserTextInput";
import Id from "../assets/img/id.svg";

describe("UserTextInput Component", () => {
  const mockInputHandler = jest.fn();
  const mockSetFocus = jest.fn();
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
      <UserTextInput
        path={Id}
        id="1234"
        placeholder="ABCD"
        inputHandler={mockInputHandler}
        setFocus={mockSetFocus}
        focus={false}
        rule="rule is here"
      />,
    );

    expect(screen.getByPlaceholderText("ABCD")).toBeInTheDocument();
    expect(screen.getByText(/id/i)).toBeInTheDocument();
  });

  it("focus 이벤트가 감지되는지 확인합니다.", () => {
    render(
      <UserTextInput
        path={Id}
        id="1234"
        placeholder="ABCD"
        inputHandler={mockInputHandler}
        setFocus={mockSetFocus}
        focus={false}
        rule="rule is here"
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText("ABCD"));
    expect(mockSetFocus.mock.calls.length).toBe(1);

    fireEvent.blur(screen.getByPlaceholderText("ABCD"));
    expect(mockSetFocus.mock.calls.length).toBe(2);
  });

  it("RuleBox가 정상적으로 렌더링 되는지 확인합니다.", () => {
    render(
      <UserTextInput
        path={Id}
        id="1234"
        placeholder="ABCD"
        inputHandler={mockInputHandler}
        setFocus={mockSetFocus}
        focus={false}
        rule="rule is here"
      />,
    );

    expect(screen.getByText("rule is here")).toBeInTheDocument();
  });
});
