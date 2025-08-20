import { createBrowserRouter} from "react-router";
import Layout from "./Layout";

import Home from "./pages/Home";
import Boliger from "./pages/Boliger";
import NotFound from "./pages/Notfound";
import Agent from "./pages/Agent";

const router = createBrowserRouter([
    {
            path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            
            {
                path: "Boliger",
                element: <Boliger />,
            },

            {
                path: "Agent",
                element: <Agent />,
            },

            {
                path: "*",
                element: <NotFound />,
            }



        ]
    }
])

export default router;