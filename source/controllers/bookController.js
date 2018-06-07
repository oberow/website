var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var files = fs.readdirSync(path.join(__dirname, '../../content/book'));
var showdown = require('showdown');
var bookDir = path.join(__dirname, '../../content/book');

exports.index = function (req, res) {

    //pass list of filenames
    let books = util.parseBooks(files);

    res.render('pages/book/index', {
        books: books
    });
};

exports.title = function (req, res) {

    //assumes .md file extension :|
    let text = fs.readFile(bookDir + '/' + req.params.title + '.md', 'utf8',
        function (err, data) {

            bookMetaData = util.getMetadata(data);
            truncatedData = util.truncateData(data);

            let converter = new showdown.Converter();
            let html = converter.makeHtml(truncatedData);

            res.render('pages/book/detail', {
                html: html
            });
        })
};