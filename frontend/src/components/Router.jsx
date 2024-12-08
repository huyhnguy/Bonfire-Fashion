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
            path: "jewelry",
            element: <Shop url='https://fakestoreapi.com/products/category/jewelery' tab='jewelry'/>,
        },
        {
            path: "electronics",
            element: <Shop url='https://fakestoreapi.com/products/category/electronics' tab='electronics'/>,
        },
        {
            path: "mens",
            element: <Shop url="https://fakestoreapi.com/products/category/men's%20clothing" tab='mens'/>,
        },
        {
            path: "womens",
            element: <Shop url="https://fakestoreapi.com/products/category/women's%20clothing" tab='womens'/>,
        },
        {
            path: "cart",
            element: <Cart />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;