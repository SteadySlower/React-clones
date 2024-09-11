import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppYoutube from "./youtube-clone/AppYoutube";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/youtube",
        element: <AppYoutube />,
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
