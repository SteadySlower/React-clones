import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import useYoutubeApi from "./context/YoutubeApiContext";

function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();

    const {
        isLoading,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword],
        queryFn: () => {
            return youtube.search(keyword);
        },
    });

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong! {error.message}</p>}
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
