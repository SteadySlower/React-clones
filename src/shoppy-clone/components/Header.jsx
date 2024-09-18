import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";

function Header() {
    const [user, setUser] = useState();
    const handleLogin = () => {
        login().then(setUser);
    };
    const handleLogout = () => {
        logout().then(setUser);
    };
    useEffect(() => {
        onUserStateChange(setUser);
    }, []);

    return (
        <header className="flex justify-between border-b border-gray-300 p-2">
            <Link
                to="/shoppy"
                className="flex items-center text-4xl text-shoppyBrand"
            >
                <FiShoppingBag />
                <h1>Shoppy</h1>
            </Link>
            <nav className="flex items-center gap-4 font-semibold">
                <Link to="/shoppy/products">Products</Link>
                <Link to="/shoppy/carts">Carts</Link>
                <Link to="/shoppy/products/new" className="text-2xl">
                    <BsFillPencilFill />
                </Link>
                {!user && <button onClick={handleLogin}>Login</button>}
                {user && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </header>
    );
}

export default Header;
