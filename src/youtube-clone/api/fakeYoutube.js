import axios from "axios";

export default class FakeYoutube {
    constructor() {}

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#hotTrend();
    }

    async #searchByKeyword(keyword) {
        return axios
            .get(`/youtube-mock/keyword.json`)
            .then((res) => res.data.items)
            .then((items) =>
                items.map((item) => ({ ...item, id: item.id.videoId }))
            );
    }

    async #hotTrend(keyword) {
        return axios
            .get(`/youtube-mock/hot-trend.json`)
            .then((res) => res.data.items);
    }
}
