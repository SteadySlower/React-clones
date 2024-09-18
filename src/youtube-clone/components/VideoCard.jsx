import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";
import { decodeHTMLEntities } from "../util/decodeHTML";

function VideoCard({ video, onClick }) {
    const {
        title,
        thumbnails: {
            default: { url },
        },
        channelTitle,
        publishedAt,
    } = video.snippet;

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/youtube/video/${video.id}`, { state: { video } });
        // navigate에 url말고 부가적인 정보를 전달할 수도 있다.
        // navigate 쓸때 주의점!: 앞에 /를 붙이면 절대경로 없으면 상대경로
    };

    return (
        <div className="flex-col" onClick={handleOnClick}>
            <img className="w-full" src={url} alt="thumbnail img" />
            <div>
                <p className="font-semibold my-2 line-clamp-2">
                    {decodeHTMLEntities(title)}
                </p>
                <p className="text-sm opacity-80">{channelTitle}</p>
                <p className="text-sm opacity-80">
                    {formatAgo(publishedAt, "ko")}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;
