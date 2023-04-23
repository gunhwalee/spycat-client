import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function GuestRoute({ component: Component }) {
  const { id } = useSelector(state => state.user);

  return !id ? Component : <Navigate to="/" />;
}

export default GuestRoute;
