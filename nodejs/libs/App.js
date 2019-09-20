const express = require("express")
const bodyParser = require("body-parser")

const root = require("./routes/root");
const categories = require("./routes/categories");
const articles = require("./routes/articles");
const recipes = require("./routes/recipes");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', root);
app.use('/api/', root);
app.use('/api/categories/', categories);
app.use('/api/articles/', articles);
app.use('/api/recipes/', recipes);



// Default 404 endpoint
app.use(function (req, res, next) {
    res.status(404);
    res.json({
        error: '404 Not found'
    });
    return;
}); 

// Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
    return;
});

module.exports = app;