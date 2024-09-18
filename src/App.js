import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppYoutube from "./youtube-clone/AppYoutube";
import Home from "./Home";
import Videos from "./youtube-clone/Videos";
import WatchVideo from "./youtube-clone/WatchVideo";
import NotFound from "./NotFound";
import AppShoppy from "./shoppy-clone/AppShoppy";
import ShoppyHome from "./shoppy-clone/Home";
import AllProducts from "./shoppy-clone/AllProducts";
import NewProduct from "./shoppy-clone/NewProduct";
import ProductDetail from "./shoppy-clone/ProductDetail";
import MyCart from "./shoppy-clone/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/youtube",
        element: <AppYoutube />,
        children: [
            { index: true, element: <Videos /> },
            { path: "videos/:keyword", element: <Videos /> }, // "/"를 안 붙이면 상대 경로!
            { path: "video/:videoId", element: <WatchVideo /> },
        ],
    },
    {
        path: "/shoppy",
        element: <AppShoppy />,
        children: [
            { index: true, element: <ShoppyHome /> },
            { path: "products", element: <AllProducts /> },
            { path: "products/new", element: <NewProduct /> },
            { path: "products/:id", element: <ProductDetail /> },
            { path: "carts", element: <MyCart /> },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <Home />
        </RouterProvider>
    );
}

export default App;
