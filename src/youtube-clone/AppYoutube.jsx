import React from "react";
import SearchHeader from "./components/SearchHeader";
import { Outlet } from "react-router-dom";

function AppYoutube(props) {
    return (
        <div>
            <SearchHeader />
            <Outlet />
        </div>
    );
}

export default AppYoutube;
