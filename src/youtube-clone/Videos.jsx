import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoCard from "./components/VideoCard";
import useYoutubeApi from "./context/YoutubeApiContext";

function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const navigate = useNavigate();

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

    const handleOnClick = (video) => {
        navigate(`/youtube/video/${video.id}`, { state: { video } });
        // navigate에 url말고 부가적인 정보를 전달할 수도 있다.
    };

    return (
        <>
            {isLoading && <p>isLoading...</p>}
            {error && <p>Something is wrong! {error.message}</p>}
            {videos && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            onClick={() => handleOnClick(video)}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default Videos;
