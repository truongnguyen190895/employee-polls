import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routers } from "@/router";
import "./index.scss";

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={routers} />);
