import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "./components/ChannelInfo";
import RelatedVideos from "./components/RelatedVideos";
import { decodeHTMLEntities } from "./util/decodeHTML";

function WatchVideo() {
    const {
        state: { video },
    } = useLocation(); // navigate를 통해 전달한 두번째 인자를 가져온다
    const { title, channelId, channelTitle, description } = video.snippet;
    return (
        <section className="flex flex-col lg:flex-row">
            <article className="basis-4/6">
                <iframe
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <div className="p-8">
                    <h2 className="text-xl font-bold">
                        {decodeHTMLEntities(title)}
                    </h2>
                    <ChannelInfo id={channelId} title={channelTitle} />
                    <pre className="whitespace-pre-wrap">{description}</pre>
                </div>
            </article>
            <section className="basis-2/6">
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}

export default WatchVideo;
