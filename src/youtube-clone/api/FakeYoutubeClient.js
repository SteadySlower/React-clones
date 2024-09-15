import axios from "axios";

export default class FakeYoutubeClient {
    async search() {
        return axios.get("/youtube-mock/keyword.json");
    }
    async videos() {
        return axios.get("/youtube-mock/hot-trend.json");
    }
}
