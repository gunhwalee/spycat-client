import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axiosMock from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar.tsx";

jest.mock("react-redux");
jest.mock("axios");
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Sidebar Component", () => {
  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    const initialState = {
      name: null,
      apikey: null,
      servers: [],
      toApi: false,
    };
    useSelector.mockImplementation((selector) =>
      selector({ user: initialState })
    );

    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const header = screen.getByText("Spy Cat");
    const logo = screen.getByAltText("logo");

    expect(header).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo-white.png");
  });

  it("로그인한 유저의 정보를 나타내는지 확인합니다.", () => {
    const USER = {
      name: "bob",
      apikey: 1234,
      servers: [
        {
          serverName: "test1",
          url: "test1.com",
          _id: 5502,
        },
      ],
      toApi: false,
    };
    useSelector.mockImplementation((selector) => selector({ user: USER }));
    axiosMock.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          servers: {
            serverName: "test1",
            url: "test1.com",
            _id: 5502,
          },
        },
      })
    );

    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const name = screen.getByText(/bob/i);
    const server = screen.getByText("test1");

    expect(name).toBeInTheDocument();
    expect(server).toBeInTheDocument();
  });

  it("로그아웃이 정상작동하는지 확인합니다.", () => {
    const USER = {
      name: "bob",
      apikey: 1234,
      servers: [
        {
          serverName: "test1",
          url: "test1.com",
          _id: 5502,
        },
      ],
      toApi: false,
    };
    useSelector.mockImplementation((selector) => selector({ user: USER }));
    axiosMock.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          servers: {
            serverName: "test1",
            url: "test1.com",
            _id: 5502,
          },
        },
      })
    );
    axiosMock.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          result: "ok",
        },
      })
    );

    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("로그아웃"));

    const LOGOUT = {
      name: null,
    };
    useSelector.mockImplementation((selector) => selector({ user: LOGOUT }));
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const login = screen.getByText("로그인");

    expect(login).toBeInTheDocument();
  });
});
