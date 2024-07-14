import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routers } from "@/router";
import { Provider } from "react-redux";
import store from "@/store";
import "./index.scss";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
);
