import React from "react";

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date; // 현재 시간과 입력된 날짜의 차이(ms)
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // 분 단위로 변환
    const diffInHours = Math.floor(diffInMinutes / 60); // 시간 단위로 변환
    const diffInDays = Math.floor(diffInHours / 24); // 일 단위로 변환

    if (diffInDays > 0) {
        return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
        return `${diffInHours}시간 전`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes}분 전`;
    } else {
        return "방금 전";
    }
}

function VideoCard({ video }) {
    return (
        <div className="flex-col">
            <img
                src={video.snippet.thumbnails.default.url}
                alt="thumbnail img"
            />
            <div>{video.snippet.title}</div>
            <div>{video.snippet.channelTitle}</div>
            <div>{timeAgo(video.snippet.publishedAt)}</div>
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
