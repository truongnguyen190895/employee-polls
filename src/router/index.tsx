import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import LoginPage from "@/pages/login";

export const routers = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
]);
