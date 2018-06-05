// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');
var fs = require('fs');
var util = require('../utilities/util');

var showdown = require('showdown');
var files = fs.readdirSync(path.join(__dirname, '../../note'));
var noteDir = path.join(__dirname, '../../note');

exports.index = function (req, res) {
    let filenamesWithoutExtension = util.getFilenamesWithoutExtension(files);

    res.render('pages/note/index', {
        notes: filenamesWithoutExtension
    });
};

exports.title = function (req, res) {

    // console.log(noteDir);
    let text = fs.readFile(noteDir + '/' + req.params.title + '.md', 'utf8',
        function (err, data) {

            let converter = new showdown.Converter();
            let html = converter.makeHtml(data);

            res.render('pages/note/detail', {
                html: html
            });
        })
};