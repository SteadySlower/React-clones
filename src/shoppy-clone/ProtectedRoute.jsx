import React from "react";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requireAdmin }) {
    const { user } = useAuthContext();
    if (!user || (requireAdmin && !user.isAdmin)) {
        return <Navigate to="/shoppy" replace />; // replace를 넣으면 history에서 빼줌!
    }
    return children;
}

export default ProtectedRoute;
