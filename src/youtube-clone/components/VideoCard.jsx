import React from "react";
import { format } from "timeago.js";

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
                <p>{format(publishedAt)}</p>
            </div>
        </div>
    );
}

export default VideoCard;
