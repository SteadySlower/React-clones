import React from "react";
import useYoutubeApi from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

function ChannelInfo({ id, title }) {
    const { youtube } = useYoutubeApi();
    const { data: url } = useQuery({
        queryKey: ["channelImageURL", id],
        queryFn: () => {
            return youtube.channelImageURL(id);
        },
    });
    return (
        <div>
            {url && <img src={url} alt="channel thumbnail img" />}
            <p>{title}</p>
        </div>
    );
}

export default ChannelInfo;
