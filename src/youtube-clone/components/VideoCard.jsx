import React from "react";
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
    return (
        <div className="flex-col" onClick={() => onClick()}>
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
