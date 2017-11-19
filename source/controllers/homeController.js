// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var files = fs.readdirSync(path.join(__dirname, '../../note'));

exports.index = function (req, res) {
    let filenamesWithoutExtension = util.getFilenamesWithoutExtension(files);

    filenamesWithoutExtension.sort(
        function (a, b) {
            return new Date(b.date) - new Date(a.date);
        }
    );
    let latest5notes = filenamesWithoutExtension.slice(0,5);

    res.render('pages/index', { notes: latest5notes })
};