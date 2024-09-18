import React from "react";
import { Outlet } from "react-router-dom";

function AppShoppy() {
    return (
        <div id="AppShoppy">
            Shoppy Header
            <Outlet />
        </div>
    );
}

export default AppShoppy;
