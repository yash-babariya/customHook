import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";
import Error from "../componets/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
        errorElement: <Error />,
    },
]);

export default router;