import { useSelector } from "react-redux";

function PrivateRoute({ component: Component }) {
  const { id } = useSelector(state => state.user);

  const handleRoute = () => {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/login";
  };

  return id ? Component : handleRoute();
}

export default PrivateRoute;
