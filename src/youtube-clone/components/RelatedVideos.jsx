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

export default RelatedVideos;
