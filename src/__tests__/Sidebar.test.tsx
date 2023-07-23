import { screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer} from "msw/node";
import Sidebar from "../components/Sidebar";
import { renderWithProviders } from "../test-utils";
import { setupStore } from "../app/store";

describe("Sidebar Component", () => {
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

  const handler = [
    rest.post(`${process.env.REACT_APP_SPYCAT_SERVER}/users/${initialState._id}/logout`,
    (req, res, ctx) => {
      return res(ctx.json({ result: "ok" }), ctx.delay(150));
    })
  ];

  const server = setupServer(...handler);
  let container: HTMLDivElement;

  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("정상적으로 렌더링 되는지 확인합니다.", () => {
    renderWithProviders(
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
    renderWithProviders(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
      {
        preloadedState: {
          user: initialState
        }
      }
    );

    const name = screen.getByText(/bob/i);
    const server = screen.getByText("test1");

    expect(name).toBeInTheDocument();
    expect(server).toBeInTheDocument();
  });

  it("로그아웃이 정상작동하는지 확인합니다.", async () => {
    setupStore({
      user: initialState
    });

    renderWithProviders(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const logout = screen.getByText("로그아웃");
    expect(logout).toBeInTheDocument();

    fireEvent.click(screen.getByText("로그아웃"));
    const login = await screen.findByText("로그인");
    expect(login).toBeInTheDocument();
  });
});
