// impl과 mock 2개의 객체를 따로 만드는 것이 아니라 외부에서 client를 받아와서 하나의 인터페이스로 통합
// 따라서 중복되는 파싱 로직을 한군데 몰아놓을 수 있게 됨.
export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channelImageURL(id) {
        // 리턴 안 써주면 리턴 안함!
        return this.apiClient
            .channels({ params: { part: "snippet", id } })
            .then((res) => res.data.items[0].snippet.thumbnails.default.url);
    }

    async relatedVideo(id) {
        return this.apiClient
            .search({
                params: {
                    part: "snippet",
                    maxResults: 25,
                    type: "video",
                    relatedToVideoID: id,
                },
            })
            .then((res) =>
                res.data.items.map((item) => ({
                    ...item,
                    id: item.id.videoId,
                }))
            );
    }

    async #searchByKeyword(keyword) {
        return this.apiClient
            .search({
                params: {
                    part: "snippet",
                    maxResults: 25,
                    type: "video",
                    q: keyword,
                },
            })
            .then((res) =>
                res.data.items.map((item) => ({
                    ...item,
                    id: item.id.videoId,
                }))
            );
    }

    async #mostPopular() {
        return this.apiClient
            .videos({
                params: {
                    part: "snippet",
                    maxResults: 25,
                    chart: "mostPopular",
                    type: "video",
                },
            })
            .then((res) => res.data.items);
    }
}
