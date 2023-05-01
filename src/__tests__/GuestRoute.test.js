import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate } from "react-router-dom";
import GuestRoute from "../components/GuestRoute";

jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("GuestRoute component", () => {
  function MockComponent() {
    return <div>Mock Component</div>;
  }

  it("로그인 안한 경우 컴포넌트를 렌더링합니다.", () => {
    const initialState = {
      id: null,
    };
    useSelector.mockImplementation(selector =>
      selector({ user: initialState }),
    );

    const { getByText } = render(
      <BrowserRouter>
        <GuestRoute component={<MockComponent />} />
      </BrowserRouter>,
    );
    expect(getByText("Mock Component")).toBeInTheDocument();
  });

  it("로그인한 경우 리다이렉트 합니다.", async () => {
    const USER = {
      id: "bob",
    };
    useSelector.mockImplementation(selector => selector({ user: USER }));
    render(
      <BrowserRouter>
        <GuestRoute component={<MockComponent />} />
      </BrowserRouter>,
    );

    expect(Navigate).toHaveBeenCalledTimes(1);
  });
});
