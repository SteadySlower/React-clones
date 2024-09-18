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
        <div className="flex my-4 mb-8 items-center">
            {url && <img className="w-10 h-10 rounded-full" src={url} alt="channel thumbnail img" />}
            <p className="text-lg font-medium ml-2">{title}</p>
        </div>
    );
}

export default ChannelInfo;
