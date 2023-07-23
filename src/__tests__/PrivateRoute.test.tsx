import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("GuestRoute component", () => {
  const MockComponent = (): JSX.Element => {
    return <div>Mock Component</div>;
  };
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("로그인한 경우 컴포넌트를 렌더링합니다.", () => {
    const initialState = {
      name: "bob",
      id: "bob@gmail.com",
      _id: "1234",
      servers: [
        {
          apikey: "APIKEY",
          serverName: "test1",
          url: "test1.com",
          _id: "5678",
          traffics: ["traffic1", "traffic2"],
          errorLists: [],
        }
      ],
    };

    renderWithProviders(
      <PrivateRoute component={<MockComponent />} />,
      {
        preloadedState: {
          user: initialState
        }
      }
    );

    expect(screen.getByText("Mock Component")).toBeInTheDocument();
  });

  it("로그인 안한 경우 리다이렉트 합니다.", async () => {
    const initialState = {
      name: null,
      id: null,
      _id: null,
      servers: [],
    };

    renderWithProviders(
      <PrivateRoute component={<MockComponent />} />,
      {
        preloadedState: {
          user: initialState
        }
      }
    );

    expect(Navigate).toHaveBeenCalledTimes(1);
  });
});
