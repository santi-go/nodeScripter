let fs = require('fs');
let mca = require('./multiChoiceAnswers')
let iu = require('./insertUsers')
let vs = require('./createValues')

function printer(e) {
    packer()
    let data = assembler(e);
    
    fs.writeFile('proccesed/script.sql', data, (err) => {
        if(err) return console.log(err);
        console.log('script.sql - Created Successfully!');
    });
}

function assembler(e) {
    let assembled = e.assambler(e);
    
    return assembled.join("");
}

function packer() {
    let values = tranmute();
    createValues(values, vs.createValues);
}

function tranmute() {
    let stone = fs.readFileSync('./raw.txt', 'utf-8').split("\n");

    return stone;
}

function createValues (v, e) {
    return vs.createValues.assambler(v, e);
}

printer(mca.multiChoiceAnswers);

//printer(iu.insertUsers);

//packer()


/*hacer configuraci'on de creacion de script values.js*/