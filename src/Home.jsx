import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div className="flex flex-col">
            <Link to="/youtube">Youtube</Link>
            <Link to="/shoppy">Shoppy</Link>
        </div>
    );
}

export default Home;
