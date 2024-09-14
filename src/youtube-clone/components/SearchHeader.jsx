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
        <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
            <Link to={"/youtube"} className="flex items-center">
                <BsYoutube className="text-4xl text-youtubeBrand" />
                <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
            </Link>

            <form
                onSubmit={handleSubmit}
                className="w-full flex justify-center"
            >
                <input
                    className="w-7/12 p-2 outline-none bg-black text-gray-50"
                    type="text"
                    placeholder="Search Video..."
                    value={query}
                    onChange={handleChange}
                />
                <button className="bg-zinc-600 px-4">
                    <BsSearch />
                </button>
            </form>
        </header>
    );
}

export default SearchHeader;
