import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import LoginPage from "@/pages/login";
import { PublicRoute, PrivateRoute } from "@/components";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [{ index: true, element: <App /> }],
  },
  {
    path: "/login",
    element: <PublicRoute />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);
