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
    const recipe = new Recipe({
        categoryId: req.body.categoryId,
        title: req.body.title,
        text: req.body.text
    });

    recipe.save(function (err) {
        if (!err) {
            return res.json({
                status: 'OK',
                recipe
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

    recipe.findById(req.params.id, function (err, article) {
        if (!article) {
            res.statusCode = 404;
            return res.json({
                error: '404 Not found'
            });
        }

        recipe.title = req.body.title;
        recipe.categoryId = req.body.categoryId;
        recipe.text = req.body.text;

        recipe.save(function (err) {
            if (!err) {
                return res.json({
                    status: 'OK',
                    recipe: recipe
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
    Recipe.findOneAndRemove({'_id': req.params.id }, function (err, recipe) {
        if (!err) {
            return ({
                status: 'OK',
                recipe: res.json(recipe)
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
