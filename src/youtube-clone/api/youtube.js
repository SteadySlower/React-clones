import axios from "axios";

export const search = async (keyword) => {
    return axios
        .get(`/youtube-mock/${keyword ? "keyword" : "hot-trend"}.json`)
        .then((res) => res.data.items);
};
