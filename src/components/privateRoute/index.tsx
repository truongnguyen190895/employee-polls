import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/store";

export const PrivateRoute = () => {
  const userDetail = useAppSelector((state) => state.auth);
  return userDetail.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
