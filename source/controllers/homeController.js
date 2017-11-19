// var Author = require('../models/author');
// var async = require('async');
// var Book = require('../models/book');
var path = require('path');
var fs = require('fs');
var util = require('../utilities/util')

var files = fs.readdirSync(path.join(__dirname, '../../note'));

exports.index = function(req,res){
    let filenamesWithoutExtension = util.getFilenamesWithoutExtension(files);

    console.log(filenamesWithoutExtension);
    res.render('pages/index',{files: filenamesWithoutExtension})
};