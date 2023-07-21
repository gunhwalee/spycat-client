import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component }: { component: JSX.Element }) {
  const { id } = useAppSelector(state => state.user);

  return id ? component : <Navigate to="/" />;
}

export default PrivateRoute;
