var path = require('path');
var fs = require('fs');

//code smell
var bookDir = path.join(__dirname, '../../content/book');

var util = require('../utilities/util')

exports.getFilenamesWithoutExtension = function getFilenamesWithoutExtension(files) {
    let filenamesWithoutExtension = files.map((fileName) => {
        let filename = path.basename(fileName, path.extname(fileName));
        let url = 'note/' + filename;
        let title = filename.slice(11);
        let date = filename.slice(0, 10);

        return {
            url,
            title,
            date
        }
    });
    return filenamesWithoutExtension;
};


exports.parseBook = function (fileNameWithoutPath) {


    let fileNameWithoutExtension = path.basename(fileNameWithoutPath, path.extname(fileNameWithoutPath));
    let pageUrl = '/book/' + fileNameWithoutExtension;
    let imageUrl = '/img/' + fileNameWithoutExtension + '.jpg';
    let dateRead = fileNameWithoutExtension.slice(0, 10);

    console.log('imageUrl',imageUrl)
    let text = fs.readFileSync(bookDir + '/' + fileNameWithoutPath);
    bookMetadata = util.getMetadata(text);
    // console.log(bookMetadata[2]);

    return {
        pageUrl,
        imageUrl,
        title: bookMetadata[0],
        dateRead, //strong type the date?
        rating: bookMetadata[2].trim(),
        author: bookMetadata[1],
        summary: bookMetadata[3],
        amazonUrl: bookMetadata[4],
    }
};

exports.parseBooks = function (files) {
    let filenamesWithoutExtension = files.map((fileName) => {
        let filename = path.basename(fileName, path.extname(fileName));
        let pageUrl = '/book/' + filename;
        let imageUrl = '/img/' + filename + '.jpg';
        let dateRead = filename.slice(0, 10);

        console.log(fileName)
        let text = fs.readFileSync(bookDir + '/' + fileName);
        bookMetadata = util.getMetadata(text);
        console.log(bookMetadata[2]);

        return {
            pageUrl,
            imageUrl,
            title: bookMetadata[0],
            dateRead, //strong type the date?
            rating: bookMetadata[2].trim(),
            author: bookMetadata[1],
            summary: bookMetadata[3],
            amazonUrl: bookMetadata[4]
        }
    });
    return filenamesWithoutExtension;
};

//expects a buffer of file
//returns an array containing [title, rating, summary]
exports.getMetadata = function (data){
    bookFileContents = data.toString().split(/\n/);
    // bookFileContents = data.split(/\n/);
    console.log("this is bookFileContents" + bookFileContents)

    var metadata = [];

    for (i = 0; i < 5; i++) {
        paragraph = bookFileContents[i];
        index = paragraph.indexOf(":");
        metadata[i] = paragraph.substring(index + 2);
    }
    // console.log('this is title',metadata[0])
    // console.log('this is author',metadata[1])
    // console.log('this is rating',metadata[2])
    // console.log('this is summary',metadata[3])
    // console.log('this is amazonUrl',metadata[4])

    return metadata;
}

exports.truncateData = function (data){
    // console.log('this is data --------------------------------------->')
    // console.log(data);
    // console.log('this is data end ----------------------------------->')
    // bookFileContents = data.ToString().split(/\n/); // code smell, split everything again ugh
    console.log('book file contents', bookFileContents);
    bookFileContents = data.split(/\n/); // code smell, split everything again ugh
    bookFileContents.splice(0,5); //code smell, hard code 3 items to remove
    var newFileContent = bookFileContents.join("\n");

    console.log('bookFileContents --------------------');
    console.log(bookFileContents);

    return newFileContent;
}