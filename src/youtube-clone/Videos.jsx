import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Videos(props) {
    const { keyword } = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // const url = `youtube-mock/${keyword ? "keyword" : "hot-trend"}.json`;
        const url = `youtube-mock/keyword.json`;
        console.log("url: ", url);
        setLoading(true);
        setError(undefined);
        fetch(url)
            .then((res) => {
                console.log("res: ", res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setVideos(data.items);
            })
            .catch((e) => {
                console.log(e);
                setError(e);
            })
            .finally(() => setLoading(false));
    }, [keyword]);

    return (
        <ul>
            <li>키워드: {keyword}</li>
            {videos.map((video) => (
                <li key={video.etag}>{video.snippet.title}</li>
            ))}
        </ul>
    );
}

export default Videos;
