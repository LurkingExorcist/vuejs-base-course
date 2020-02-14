const express = require('express');
const router = express.Router();

const {
    requestWrapper
} = require('./utils');

router.get('/search', (req, res) => 
    requestWrapper(res, 'search', req.query));

router.get('/radio', (req, res) => 
    requestWrapper(res, 'radio', req.query));

module.exports = router;