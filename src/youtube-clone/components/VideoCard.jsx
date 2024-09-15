import React from "react";

function VideoCard({ video }) {
    return (
        <div className="flex-col">
            <img
                src={video.snippet.thumbnails.default.url}
                alt="thumbnail img"
            />
            <div>{video.snippet.title}</div>
            <div>{video.snippet.channelTitle}</div>
            <div>{video.snippet.publishedAt}</div>
        </div>
    );
}

/*
썸네일 이미지
제목
체널명
날짜
*/

export default VideoCard;
