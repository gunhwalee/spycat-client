import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const { id } = useSelector(state => state.user);

  return id ? Component : <Navigate to="/" />;
}

export default PrivateRoute;
