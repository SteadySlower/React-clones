import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const onChange = (e) => {
        setQuery(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (query.length === 0) {
            return;
        }
        navigate(`/youtube/videos/${query}`);
        setQuery("");
    };

    return (
        <div>
            <img src="/images/youtube-logo.png" />
            <form onSubmit={onSubmit}>
                <input type="text" value={query} onChange={onChange} />
                <button>🔍</button>
            </form>
        </div>
    );
}

export default Navbar;
