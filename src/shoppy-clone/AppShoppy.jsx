import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function AppShoppy() {
    return (
        <div id="AppShoppy">
            <Header />
            <Outlet />
        </div>
    );
}

export default AppShoppy;
