import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Videos() {
    const { keyword } = useParams();

    const {
        isLoading,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword],
        queryFn: async () => {
            return fetch(
                `/youtube-mock/${keyword ? "keyword" : "hot-trend"}.json`
            )
                .then((res) => res.json())
                .then((data) => data.items);
        },
    });

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong!</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <li key={video.etag}>{video.snippet.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Videos;
