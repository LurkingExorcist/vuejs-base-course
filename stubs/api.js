const express = require('express');
const router = express.Router();

const {
    requestWrapper
} = require('./utils');

router.get('/search', (req, res) => 
    requestWrapper(res, 'search', req.query));

module.exports = router;