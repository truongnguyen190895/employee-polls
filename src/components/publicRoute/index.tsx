import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const mock_user = "mock_user";

  return mock_user ? <Navigate to="/" /> : <Outlet />;
};
