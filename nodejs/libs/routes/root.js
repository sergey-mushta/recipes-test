const express = require('express');
const router = express.Router();

require("../models/");
const Recipe = require("../models/recipe");

router.get('/', function (req, res) {
    res.json({
        status: 'OK'
    });
});

module.exports = router;
 