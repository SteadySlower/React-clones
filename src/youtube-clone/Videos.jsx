import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import FakeYoutube from "./api/fakeYoutube";

function Videos() {
    const { keyword } = useParams();

    const {
        isLoading,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword],
        queryFn: () => {
            const youtube = new FakeYoutube();
            return youtube.search(keyword);
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
