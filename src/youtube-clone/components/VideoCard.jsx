import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";
import { decodeHTMLEntities } from "../util/decodeHTML";

function VideoCard({ video, type }) {
    const {
        title,
        thumbnails: {
            default: { url },
        },
        channelTitle,
        publishedAt,
    } = video.snippet;

    const isList = type === "list";

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/youtube/video/${video.id}`, { state: { video } });
        // navigate에 url말고 부가적인 정보를 전달할 수도 있다.
        // navigate 쓸때 주의점!: 앞에 /를 붙이면 절대경로 없으면 상대경로
    };

    return (
        <li className={isList ? "flex" : ""} onClick={handleOnClick}>
            <img
                className={isList ? "w-60 mr-4" : "w-full"}
                src={url}
                alt="thumbnail img"
            />
            <div>
                <p className="font-semibold my-2 line-clamp-2">
                    {decodeHTMLEntities(title)}
                </p>
                <p className="text-sm opacity-80">{channelTitle}</p>
                <p className="text-sm opacity-80">
                    {formatAgo(publishedAt, "ko")}
                </p>
            </div>
        </li>
    );
}

export default VideoCard;
