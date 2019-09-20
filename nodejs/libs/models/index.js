var mongoose = require('mongoose');
var config = require('../config/config.json');

mongoose.connect(config.mongodb_url);