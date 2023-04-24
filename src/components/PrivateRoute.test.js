import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

jest.mock("react-redux");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("GuestRoute component", () => {
  function MockComponent() {
    return <div>Mock Component</div>;
  }

  it("로그인한 경우 컴포넌트를 렌더링합니다.", () => {
    const USER = {
      id: "bob",
    };
    useSelector.mockImplementation(selector => selector({ user: USER }));

    const { getByText } = render(
      <BrowserRouter>
        <PrivateRoute component={<MockComponent />} />
      </BrowserRouter>,
    );
    expect(getByText("Mock Component")).toBeInTheDocument();
  });

  it("로그인 안한 경우 리다이렉트 합니다.", async () => {
    const NO_USER = {
      id: null,
    };
    useSelector.mockImplementation(selector => selector({ user: NO_USER }));
    render(
      <BrowserRouter>
        <PrivateRoute component={<MockComponent />} />
      </BrowserRouter>,
    );

    expect(Navigate).toHaveBeenCalledTimes(1);
  });
});
