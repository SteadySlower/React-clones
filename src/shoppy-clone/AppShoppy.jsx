import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function AppShoppy() {
    useEffect(() => {
        document.body.id = "appShoppy";
        return () => {
            document.body.id = undefined;
        };
    }, []);
    return (
        <div id="AppShoppy">
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                    <Header />
                    <Outlet />
                </AuthContextProvider>
            </QueryClientProvider>
        </div>
    );
}

export default AppShoppy;
