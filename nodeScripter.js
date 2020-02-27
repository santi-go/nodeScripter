let fs = require('fs');
let dt = require('./multiChoiceAnswers')

function printer(e) {
    let data = packer(e);
    
    fs.writeFile('proccesed/script.sql', data, (err) => {
        if(err) return console.log(err);
        console.log('script.sql - Created Successfully!');
    });
}

function packer(e) {
    let package = dt.multiChoiceAnswers.assambler(e);
    
    return package.join("");
}

printer(dt.multiChoiceAnswers);
