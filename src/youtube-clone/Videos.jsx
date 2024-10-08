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
        staleTime: 1000 * 60, // 자주 변하지 않는 데이터들은 stale time을 길게
    });

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong! {error.message}</p>}
            {videos && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default Videos;
