const express = require('express');
const router = express.Router();

const {
    requestWrapper
} = require('./utils');

router.get('/search', (req, res) => 
    requestWrapper(res, 'search', req.query));

router.get('/artist', (req, res) => 
    requestWrapper(res, 'artist', req.query));

module.exports = router;