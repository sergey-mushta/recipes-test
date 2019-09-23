const express = require('express');
const router = express.Router();

require("../models");
const Recipe = require("../models/recipe");

router.get('/tree/:id', function (req, res) {
    console.log(req);
    res.json({
        status: 'OK'
    });
});

router.get('/:id', function (req, res) {
    console.log(req);
    res.json({
        status: 'OK'
    });
});

router.post('/create', function (req, res) {
    console.log(req);
    res.json({
        status: 'OK'
    });
});

router.put('/update', function (req, res) {
    console.log(req);
    res.json({
        status: 'OK'
    });
});

router.delete('/:id', function (req, res) {
    console.log(req);
    res.json({
        status: 'OK'
    });
});

module.exports = router;
