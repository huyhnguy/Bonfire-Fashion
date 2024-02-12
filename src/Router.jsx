import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "shop",
            element: <Shop />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;