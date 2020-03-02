let fs = require('fs');

exports.createValues = {
    parts: [
        "exports.values = [",
        "];"
    ],
    assambler: (values, el)  => {
        console.log(values)
        let lines = el.parts[0]+values+el.parts[1];
        fs.writeFile('proccesed/values.js', lines, (err) => {
            if(err) return console.log(err);
            console.log('values.js - Created Successfully!');
        });
    }
}