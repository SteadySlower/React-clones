import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppYoutube from "./youtube-clone/AppYoutube";
import Home from "./Home";
import Videos from "./youtube-clone/Videos";
import WatchVideo from "./youtube-clone/WatchVideo";
import NotFound from "./NotFound";

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
            { path: "/youtube/videos", element: <Videos /> },
            { path: "/youtube/video/:videoId", element: <WatchVideo /> },
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
