var path = require('path');
var fs = require('fs');
var bookDir = path.join(__dirname, '../../book');
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


exports.parseBooks = function (files) {
    let filenamesWithoutExtension = files.map((fileName) => {
        let filename = path.basename(fileName, path.extname(fileName));
        let pageUrl = 'book/' + filename;
        let imageUrl = 'img/' + filename + '.jpg';
        let dateRead = filename.slice(0, 10);

        console.log(fileName)
        let text = fs.readFileSync(bookDir + '/' + fileName);
        // console.log(text)
        bookMetadata = util.getMetadata(text);

        // console.log(bookMetadata)

        // fs.readFile()

        // let bookMetadata = getBookMetadata()

        return {
            pageUrl,
            imageUrl,
            title: bookMetadata[0],
            dateRead, //strong type the date?
            rating: bookMetadata[2],
            author: bookMetadata[1],
            summary: bookMetadata[3],
        }
    });
    return filenamesWithoutExtension;
};

//expects a buffer of file
//returns an array containing [title, rating, summary]
exports.getMetadata = function (data){
    bookFileContents = data.toString().split(/\n/);
    console.log("this is bookFileContents" + bookFileContents)

    var metadata = [];

    for (i = 0; i < 4; i++) {
        paragraph = bookFileContents[i];
        index = paragraph.indexOf(":");
        metadata[i] = paragraph.substring(index + 2);
    }
    console.log(metadata[0])
    console.log(metadata[1])
    console.log(metadata[2])
    console.log(metadata[3])

    return metadata;
}

exports.truncate = function (data){
    bookFileContents = data.ToString().split(/\n/); // code smell, split everything again ugh
    bookFileContents.splice(0,3); //code smell, hard code 3 items to remove
    bookFileContents.join("\n");

    return bookFileContents;
}