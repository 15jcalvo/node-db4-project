const express = require('express');
// const helpers = require('./model');

const router = express.Router();

router.get('/', (res, req, next) => {
    console.log('hello')
    next()
})

module.exports = router;