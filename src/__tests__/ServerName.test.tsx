import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ServerName from "../components/ServerName";

describe("ServerName Component", () => {
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
        <ServerName name="Test server" apikey="1234" />
      </BrowserRouter>,
    );

    const header = screen.getByText("Test server");

    expect(header).toBeInTheDocument();
  });

  it("드랍다운 메뉴가 정상적으로 렌더링 되는지 확인합니다.", () => {
    render(
      <BrowserRouter>
        <ServerName name="Test server" apikey="1234" />
      </BrowserRouter>,
    );

    fireEvent.mouseEnter(screen.getByText("Test server"));

    const dropdown = screen.getByText("트래픽 차트");

    expect(dropdown).toBeInTheDocument();
  });

  it("드랍다운 메뉴가 정상적으로 사라지는지 확인합니다.", async () => {
    render(
      <BrowserRouter>
        <ServerName name="Test server" apikey="1234" />
      </BrowserRouter>,
    );

    fireEvent.mouseEnter(screen.getByText("Test server"));
    fireEvent.mouseLeave(screen.getByText("Test server"));

    await waitFor(() =>
      expect(
        screen.queryByRole("a", { name: /traffics/i }),
      ).not.toBeInTheDocument(),
    );
  });
});
