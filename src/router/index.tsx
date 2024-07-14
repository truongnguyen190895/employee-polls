import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/login";
import LeaderBoard from "@/pages/leaderBoard";
import New from "@/pages/new";
import Home from "@/pages/home";
import { PublicRoute, PrivateRoute, Layout } from "@/components";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <PrivateRoute />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/leader-board",
        element: <LeaderBoard />,
      },
      {
        path: "/new",
        element: <New />,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);
