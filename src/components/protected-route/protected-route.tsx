import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "../../services/redusers/index";
import { LOGIN_ROUTE } from "../../utils/constants";

export default function ProtectedRoute() {
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_ROUTE} state={{ from: location.pathname }} />
  );
}
