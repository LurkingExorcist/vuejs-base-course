const qs = require('querystring');
const axios = require('axios');

const baseURL = "https://api.deezer.com/";
const requestWrapper = async (res, route, query) => {
  try {
    const {
      data
    } = await axios.get(`${baseURL + route}?${qs.stringify(query)}`);

    res.json(data);
  } catch(e) {
    console.error(e);
    res.status(500).json({
      error: {
        message: e.message
      }
    })
  }
}

module.exports = {
    requestWrapper
};