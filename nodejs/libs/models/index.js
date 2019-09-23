const mongoose = require('mongoose');
const config = require('../../config/config.json');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongodb_url); 

const db = mongoose.connection;

db.on('error', function (err) {
    console.log("MongoDB connection error:", err.message);
    process.exit();
});

db.once('open', function callback() {
    console.log("MongoDB connected at " + config.mongodb_url);
});