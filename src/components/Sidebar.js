import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import ServerName from "./ServerName";
import { deleteUser, setServers } from "../features/userSlice";
import * as S from "../styles/SideBarStyles";
import { SIZE } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import logo from "../assets/img/logo-white.png";

function Sidebar() {
  const { name, apikey, servers, toApi } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [serverList, setServerList] = useState(null);

  useEffect(() => {
    const loadServerList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/serverlists`,
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
  }, [name, toApi]);

  useEffect(() => {
    if (servers && servers.length) {
      const contents = servers.map(element => {
        return (
          <ServerName
            name={element.serverName}
            id={element.url}
            key={element._id}
          />
        );
      });

      setServerList(contents);
    }
  }, [servers]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/logout`,
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
          <S.List>
            <img
              alt="logo"
              src={logo}
              width={SIZE.FONT_REGULAR}
              height={SIZE.FONT_REGULAR}
            />
            <S.Title>Spy Cat</S.Title>
          </S.List>
        </Link>
        {name && (
          <ol>
            <Link to="/users">
              <S.List>{name}님</S.List>
            </Link>
            {serverList}
            <Link to="/createserver">+ 서버 추가</Link>
          </ol>
        )}
      </nav>
      <S.Footer>
        {name && (
          <>
            <Logout width={SIZE.FONT_SMALL} height={SIZE.FONT_SMALL} />
            <S.Button type="button" onClick={handleLogout}>
              로그 아웃
            </S.Button>
          </>
        )}
      </S.Footer>
    </S.Aside>
  );
}

export default Sidebar;
