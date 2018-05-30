// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var noteFiles = fs.readdirSync(path.join(__dirname, '../../note'));
var bookFiles = fs.readdirSync(path.join(__dirname, '../../book'));

exports.index = function (req, res) {
    let filenamesWithoutExtension = util.getFilenamesWithoutExtension(noteFiles);
    let books = util.parseBooks(bookFiles);

    filenamesWithoutExtension.sort(
        function (a, b) {
            return new Date(b.date) - new Date(a.date);
        }
    );

    books.sort(
        function (a, b) {
            return new Date(b.date) - new Date(a.date);
        }
    );

    let latest5notes = filenamesWithoutExtension.slice(0,5);
    let latest5books = books.slice(0,5);
    //console.log(latest5books)

    res.render('pages/index', { notes: latest5notes, books: latest5books })
};