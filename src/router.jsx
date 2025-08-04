import { createBrowserRouter} from "react-router";


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