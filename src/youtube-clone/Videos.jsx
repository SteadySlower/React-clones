import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import axios from "axios";

function Videos() {
    const { keyword } = useParams();

    const {
        isLoading,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword],
        queryFn: async () => {
            return axios.get(
                `/youtube-mock/${keyword ? "keyword" : "hot-trend"}.json`
            )
                .then((res) => res.data.items);
        },
    });

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong!</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default Videos;
