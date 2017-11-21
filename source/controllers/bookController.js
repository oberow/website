var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var files = fs.readdirSync(path.join(__dirname, '../../book'));

exports.index = function (req, res) {
    let books = util.parseBooks(files);

    res.render('pages/note/index', {
        books
    });
};

exports.title = function (req, res) {

    let text = fs.readFile(noteDir + '/' + req.params.title + '.md', 'utf8',
        function (err, data) {

            let converter = new showdown.Converter();
            let html = converter.makeHtml(data);

            res.render('pages/note/detail', {
                html: html
            });
        })
};