const qs = require('querystring');
const axios = require('axios');

const baseURL = "https://api.deezer.com/";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const requestWrapper = async (res, route, query) => {
    const {
        data
    } = await axios.get(`${baseURL + route}?${qs.stringify(query)}`);

    res.json(data.data);
}

const getObjectsList = async (res, type) => {
    const artists =
        await Promise.all(
            [...new Array(50)].map(
                async () => {
                    const {
                        data
                    } = await axios.get(`${baseURL}${type}/${random(1, 1000)}`);
                    return data;
                }
            )
        )

    res.json(artists.filter(a => !a.error));
}

module.exports = {
    baseURL,
    requestWrapper,
    getObjectsList
};