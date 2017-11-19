var path = require('path');
var fs = require('fs');

exports.getFilenamesWithoutExtension = function getFilenamesWithoutExtension(files) {
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


