import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

function Header() {
    const navigate = useNavigate();

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
                <button>Login</button>
            </nav>
        </header>
    );
}

export default Header;
