const express = require('express');
const router = express.Router();

require("../models");
const Category = require("../models/category");

router.get('/all', function (req, res) {
    Category.find(function (err, categories) {
        if (!err) {
            return ({
                status: 'OK',
                items: res.json(categories)
            });
        } else {
            res.statusCode = 500;
            return res.json({
                status: 'KO',
                error: 'Server error',
                errorMsg: error.msg
            });
        } 
    });
});

router.post('/create', function (req, res) {
    const category = new Category({
        title: req.body.title,
        parentId: req.body.parentId
    });

    category.save(function (err) {
        if (!err) {
            return res.json({
                status: 'OK',
                category: category
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
    });
});

router.put('/update', function (req, res) {

    Category.findById(req.params.id, function (err, category) {
        if (!category) {
            res.statusCode = 404;
            return res.json({
                error: '404 Not found'
            });
        }

        category.title = req.body.title;
        category.pareintId = req.body.parentId;

        category.save(function (err) {
            if (!err) {
                return res.json({
                    status: 'OK',
                    category: category
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
        });
    });
});

router.delete('/:id', function (req, res) {
    Category.findOneAndRemove({'_id': req.params.id }, function (err, category) {
        if (!err) {
            return ({
                status: 'OK',
                category: res.json(category)
            });
        } else {
            res.statusCode = 500;
            return res.json({
                status: 'KO',
                error: 'Server error',
                errorMsg: error.msg
            });
        } 
    });
});

module.exports = router;
