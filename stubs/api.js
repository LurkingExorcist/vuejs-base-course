const express = require('express');
const router = express.Router();

const {
    requestWrapper,
    getObjectsList
} = require('./utils');

router.get('/search', (req, res, next) => 
    requestWrapper(res, 'search', req.query)
    .catch(next)
);

router.get('/artist', (req, res, next) => 
    getObjectsList(res, 'artist')
    .catch(next)
);

router.get('/genres', (req, res, next) => 
    getObjectsList(res, 'genre')
    .catch(next)
);

router.get('/radio', (req, res, next) => 
    requestWrapper(res, 'radio', req.query)
    .catch(next)
);

router.get('/tracklist', (req, res, next) => {
    if (!req.query.url) {
        throw 'url required';
    }

    const match = req.query.url.match(/https:\/\/api\.deezer\.com\/(?<route>.+)/);

    if (!match) {
        throw 'wrong url';
    }

    requestWrapper(res, match.groups.route)
        .catch(next)
});

module.exports = router;