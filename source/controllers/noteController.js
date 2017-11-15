// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');

var fs = require('fs');
var files = fs.readdirSync(path.join(__dirname, '../note'));

exports.index = function (req, res) {
    res.render('pages/note/index', { books: files });
};