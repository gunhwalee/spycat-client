import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import ServerName from "./ServerName";
import { deleteUser, setServers } from "../features/userSlice";
import * as S from "../styles/SideBarStyles";
import { SIZE } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import { ReactComponent as Login } from "../assets/img/login.svg";
import logo from "../assets/img/logo-white.png";

function Sidebar() {
  const { name, _id, servers } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [serverList, setServerList] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const loadServerList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${_id}/serverlists`,
          { withCredentials: true },
        );

        dispatch(setServers({ servers: response.data.servers }));
      } catch (err) {
        console.error(err);
      }
    };

    if (name) {
      loadServerList();
    }
  }, [name, _id, dispatch]);

  useEffect(() => {
    if (servers && servers.length) {
      const contents = servers.map(element => {
        return (
          <ServerName
            name={element.serverName}
            apikey={element.apikey}
            key={element.apikey}
          />
        );
      });

      setServerList(contents);
    }
  }, [servers]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${_id}/logout`,
        null,
        { withCredentials: true },
      );

      if (response.data.result === "ok") {
        dispatch(deleteUser());
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Aside>
      <nav>
        <Link to="/">
          <S.Header>
            <img
              alt="logo"
              src={logo}
              width={SIZE.FONT_REGULAR}
              height={SIZE.FONT_REGULAR}
            />
            <S.Title>Spy Cat</S.Title>
          </S.Header>
        </Link>
        {name ? (
          <ol>
            <Link to="/users">
              <S.List>{name}님</S.List>
            </Link>
            {serverList}
            <Link to="/createserver">
              <S.List>
                <span>+ 서버 추가</span>
              </S.List>
            </Link>
          </ol>
        ) : (
          <ServerName name="예시용 차트" apikey="example" />
        )}
      </nav>
      <S.Footer>
        {name ? (
          <S.Button type="button" onClick={handleLogout}>
            <Logout width={SIZE.FONT_SMALL} height={SIZE.FONT_SMALL} />
            <p>로그아웃</p>
          </S.Button>
        ) : (
          <Link to="/login">
            <Login width={SIZE.FONT_SMALL} height={SIZE.FONT_SMALL} />
            <p>로그인</p>
          </Link>
        )}
      </S.Footer>
    </S.Aside>
  );
}

export default Sidebar;
