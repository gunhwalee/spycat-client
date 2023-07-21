import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router-dom";

function GuestRoute({ component }: { component: JSX.Element }) {
  const { id } = useAppSelector(state => state.user);

  return !id ? component : <Navigate to="/" />;
}

export default GuestRoute;
