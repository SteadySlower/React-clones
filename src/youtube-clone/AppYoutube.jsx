import React from "react";
import SearchHeader from "./components/SearchHeader";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();
function AppYoutube(props) {
    return (
        <div id="AppYoutube">
            <SearchHeader />
            <YoutubeApiProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </YoutubeApiProvider>
        </div>
    );
}

export default AppYoutube;
