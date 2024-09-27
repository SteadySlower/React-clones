import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

function Header() {
    const { user, login, logout } = useAuthContext();

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
                {user && <Link to="/shoppy/carts">Carts</Link>}
                {user && user.isAdmin && (
                    <Link to="/shoppy/products/new" className="text-2xl">
                        <BsFillPencilFill />
                    </Link>
                )}
                {user && <User user={user} />}
                {!user && <Button text={"Login"} onClick={login} />}
                {user && <Button text={"Logout"} onClick={logout} />}
            </nav>
        </header>
    );
}

export default Header;
