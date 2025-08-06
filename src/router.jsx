import { createBrowserRouter} from "react-router";
import Layout from "./Layout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/Notfound";

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
                path: "shop",
                element: <Shop />,
            },

            {
                path: "*",
                element: <NotFound />,
            }



        ]
    }
])

export default router;