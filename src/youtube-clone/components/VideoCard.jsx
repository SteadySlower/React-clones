import React from "react";
import { formatAgo } from "../util/date";

// string에 #&39 같은 형태의 html 특수문자가 있는 경우 해결하는 방법
    // html 문서 안에 넣었다가 빼준다.
function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
}

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
