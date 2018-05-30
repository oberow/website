var path = require('path');
var fs = require('fs');

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
        let url = 'book/' + filename;
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
