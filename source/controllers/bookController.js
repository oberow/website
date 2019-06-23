var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var files = fs.readdirSync(path.join(__dirname, '../../content/book'));
var showdown = require('showdown');
var bookDir = path.join(__dirname, '../../content/book');

exports.index = function (req, res) {

    // console.log('bookController/index - files', files)
    //pass array of filenames, eg  2019-09-02-read a book.md , 2017-10-11-bookSummary.md
    let books = util.parseBooks(files);
    // console.log('this is books',books)

    res.render('pages/book/index', {
        books: books
    });
};

exports.title = function (req, res) {

    //assumes .md file extension :|
    let fileNameWithoutPath = req.params.title + '.md'
    let book = util.parseBook(fileNameWithoutPath)

    let text = fs.readFile(bookDir + '/' + req.params.title + '.md', 'utf8',
        function (err, data) {

            // console.log('this is data ------------------------------------------------------');
            // console.log(data);
            bookMetaData = util.getMetadata(data);
            truncatedData = util.truncateData(data);

            let converter = new showdown.Converter();
            let html = converter.makeHtml(truncatedData);

            res.render('pages/book/detail', {
                html: html,
                book
            });
        })
};