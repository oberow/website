// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');

var fs = require('fs');

var showdown  = require('showdown');
// converter = new showdown.Converter(),
// text      = '#hello, markdown!',
// html      = converter.makeHtml(text);

var files = fs.readdirSync(path.join(__dirname, '../../note'));

exports.index = function (req, res) {
    res.render('pages/note/index', { books: files });
};

exports.title = function (req, res) {
    let text = fs.readFile('') 
    res.render('pages/note/index', { books: files });
};