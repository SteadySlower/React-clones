import React from "react";
import { formatAgo } from "../util/date";

function VideoCard({ video }) {
    const {
        title,
        thumbnails: {
            default: { url },
        },
        channelTitle,
        publishedAt,
    } = video.snippet;
    return (
        <div className="flex-col">
            <img src={url} alt="thumbnail img" />
            <div>
                <p>{title}</p>
                <p>{channelTitle}</p>
                <p>{formatAgo(publishedAt, "ko")}</p>
            </div>
        </div>
    );
}

export default VideoCard;
