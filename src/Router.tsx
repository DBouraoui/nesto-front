import {createBrowserRouter} from "react-router";
import Login from "@/pages/Login.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
]);