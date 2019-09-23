const express = require('express');
const router = express.Router();

require("../models");
const Article = require("../models/article");

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
    const article = new Article({
        categoryId: req.body.categoryId,
        title: req.body.title,
        description: req.body.description,
        text: req.body.text
    });

    article.save(function (err) {
        if (!err) {
            return res.json({
                status: 'OK',
                article: article
            });
        } else {
            if (err.name === 'ValidationError') {
                let errorData = [];
                for (let errorKey in err.errors) {
                    errorData.push({
                        'key': errorKey,
                        'message': err.errors[errorKey].message
                    });
                }
                res.statusCode = 400;
                res.json({
                    error: 'Validation error',
                    errorData
                });
            } else {
                res.statusCode = 500;
                return res.json({
                    status: 'KO',
                    error: 'Server error',
                    errorMsg: error.msg
                });
            }
        }
    });});

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
