import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/store";

export const PublicRoute = () => {
  const userDetail = useAppSelector((state) => state.auth);
  return userDetail.isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
