import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import LoginPage from "@/pages/login";
import { PublicRoute } from "@/components";

export const routers = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/login",
    element: <PublicRoute />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);
