const formidable = require('formidable');
const fs = require('fs');
var request = require('request');


module.exports.errorResolve = (err) => {
    return {error: err};
}

module.exports.successResolve = (data) => {
    return {error: null, result: data};
}

module.exports.sendResponse = (success = true, status = 200, message = '', response = null, error = 0) => {
    if (response) {
        return {
            response: {
                status: status,
                success: success,
                error: error,
                message: message,
                details: response
            }
        }
    }
    return {
        response: {
            status: status,
            success: success,
            error: error,
            message: message
        }
    }
}

module.exports.uploadFile = (req) => {
    return new Promise((resolve, reject) => {
        const form = new formidable({multiples: true, uploadDir: process.env.BANNER_PATH});
        let filename = '';
        form.on('file', function(field, file) {
            //rename the incoming file to the file's name
            const timestamp = new Date().getTime();
            let fileExplode = file.name.split('.');
            filename = fileExplode[0] +'_'+ timestamp + '.'+fileExplode[1] ;
            fs.rename(file.path, form.uploadDir + "/" + filename, (err) => {
                console.log('file error >> ', err);
            });
        });
        form.parse(req, (err, fields, files) => {
            const data = fields;
            data['fileName'] = filename;
            data['success'] = true;
            resolve(data);
        });
    });
}