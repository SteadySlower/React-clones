import axios from "axios";

export const search = async (keyword) => {
    return axios
        .get(`/youtube-mock/${keyword ? "keyword" : "hot-trend"}.json`)
        .then((res) => res.data.items);
};

export default class YoutubeImpl {
    constructor() {
        this.httpClient = axios.create({
            baseURL: "https://youtube.googleapis.com/youtube/v3/",
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
        });
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#hotTrend();
    }

    async #searchByKeyword(keyword) {
        return this.httpClient
            .get("search", {
                params: {
                    part: "snippet",
                    maxResults: 25,
                    type: "video",
                    q: keyword,
                },
            })
            .then((res) => res.data.items)
            .then((items) => {
                console.log(items);
                return items;
            })
            .then((items) =>
                items.map((item) => ({ ...item, id: item.id.videoId }))
            );
    }

    async #hotTrend(keyword) {
        return this.httpClient
            .get("videos", {
                params: {
                    part: "snippet",
                    chart: "mostPopular",
                    maxResults: 25,
                    type: "video",
                },
            })
            .then((res) => res.data.items);
    }
}
