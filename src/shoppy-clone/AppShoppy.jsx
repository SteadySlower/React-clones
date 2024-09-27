import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./AppShoppy.css";
import { AuthContextProvider } from "./context/AuthContext";

function AppShoppy() {
    useEffect(() => {
        document.body.id = "appShoppy";
        return () => {
            document.body.id = undefined;
        };
    }, []);
    return (
        <div id="AppShoppy">
            <AuthContextProvider>
                <Header />
                <Outlet />
            </AuthContextProvider>
        </div>
    );
}

export default AppShoppy;
