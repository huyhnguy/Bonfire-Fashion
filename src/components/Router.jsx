import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App/App";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import ErrorPage from "./ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "shop",
            element: <Shop url='https://fakestoreapi.com/products' tab='shop'/>,
        },
        {
            path: "jewelry",
            element: <Shop url='https://fakestoreapi.com/products/category/jewelery' tab='jewelry'/>,
        },
        {
            path: "cart",
            element: <Cart />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;