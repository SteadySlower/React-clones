import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="flex gap-5">
            <p onClick={() => navigate(`/shoppy`)}>🛒 Shoppy</p>
            <p onClick={() => navigate(`/shoppy/products`)}>Prouduct</p>
            <p onClick={() => navigate(`/shoppy/carts`)}>Carts</p>
            <p onClick={() => navigate(`/shoppy/products/new`)}>✏️</p>
            <p>Login</p>
        </div>
    );
}

export default Header;
