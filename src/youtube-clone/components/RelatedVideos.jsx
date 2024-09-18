import React from "react";
import useYoutubeApi from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

function RelatedVideos({ id }) {
    const { youtube } = useYoutubeApi();
    const {
        isLoading,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["relatedVideo", id],
        queryFn: () => {
            return youtube.relatedVideo(id);
        },
        staleTime: 1000 * 60 * 5, // stale 타임 길게
    });

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong! {error.message}</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} type="list" />
                    ))}
                </ul>
            )}
        </>
    );
}

export default RelatedVideos;
