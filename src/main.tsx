
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import {router} from "@/Router.tsx";

const root = document.getElementById("root");

// @ts-ignore
ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
);
