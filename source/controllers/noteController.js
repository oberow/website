// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');

var fs = require('fs');

var showdown = require('showdown');
var files = fs.readdirSync(path.join(__dirname, '../../note'));
var noteDir = path.join(__dirname, '../../note');

exports.index = function (req, res) {
    let filenamesWithoutExtension = getFilenamesWithoutExtension();

    console.log(filenamesWithoutExtension);

    res.render('pages/note/index', {
        notes: filenamesWithoutExtension
    });
};

exports.title = function (req, res) {
    console.log('tim wasl here');
    console.log(req.params.title);
    let text = fs.readFile(noteDir + '/' + req.params.title + '.md', 'utf8', function (err, data) {

        console.log(data);
        let converter = new showdown.Converter();
        let html = converter.makeHtml(data);
        console.log('this is html', html);

        res.render('pages/note/detail', {
            html: html
        });
    })
};

function getFilenamesWithoutExtension() {
    let filenamesWithoutExtension = files.map((fileName) => {
        let filename = path.basename(fileName, path.extname(fileName));
        let url = 'note/' + filename;
        let title = filename.slice(11);

        return {
            url,
            title
        }
    });
    return filenamesWithoutExtension;
}
