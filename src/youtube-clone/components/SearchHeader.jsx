import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

function SearchHeader() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { keyword } = useParams();
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.length === 0) {
            return;
        }
        navigate(`/youtube/videos/${query}`);
    };
    //📝 이미 파람이 있다면 keyword에 있어야 함! (새로 고침 같은 것 했을 때)
    useEffect(() => {
        setQuery(keyword || "");
    }, [keyword]);

    return (
        <header>
            <Link to={"/youtube"}>
                <div>
                    <BsYoutube />
                    <h1>Youtube</h1>
                </div>
            </Link>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Video..."
                    value={query}
                    onChange={handleChange}
                />
                <button>
                    <BsSearch />
                </button>
            </form>
        </header>
    );
}

export default SearchHeader;
