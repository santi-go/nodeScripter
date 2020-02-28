let fs = require('fs');
let mca = require('./multiChoiceAnswers')
let iu = require('./insertUsers')

function printer(e) {
    let data = packer(e);
    
    fs.writeFile('proccesed/script.sql', data, (err) => {
        if(err) return console.log(err);
        console.log('script.sql - Created Successfully!');
    });
}

function packer(e) {
    let package = e.assambler(e);
    
    return package.join("");
}

//printer(mca.multiChoiceAnswers);

printer(iu.insertUsers);
