let fs = require('fs');
let config = require('../samples/config.json');
const readingPath = './samples/raw.txt';
const encoding = 'utf-8';

exports.reader = {
    getRaw: () => {
        return fs.readFileSync(readingPath, encoding).split("\n");
    },

    getConfig: () => {
        return config;
    }

}

exports.writer = {
    createFile: (path, data) => {
        fs.writeFile(path, data, (err) => {
            if(err) return console.log(err);
            console.log(path+' - Created Successfully!');
        });
    }
}