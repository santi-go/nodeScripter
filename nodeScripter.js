let fs = require('fs');
let mca = require('./multiChoiceAnswers')
let iu = require('./insertUsers')

function printer(e) {
    rawToModule()
    let data = assembler(e);
    
    createfile('processed/script.sql', data);
}

function assembler(e) {
    let assembled = e.assambler(e);
    
    return assembled.join("");
}

function rawToModule() {
    let raw = fs.readFileSync('./raw.txt', 'utf-8').split("\n");
    let formatted =[];
    let script = "";
    let data = "";
    let parts = [
        "exports.values = [",
        "];"
    ];

    raw.forEach(el => {
        el = el.slice(0,-1)
        formatted.push('"'+el+'"');
    })
    
    script = formatted.toString()
    data = parts[0]+script+parts[1];
    createfile ('processed/values.js', data);
 }

 function createfile(path, data) {
    fs.writeFile(path, data, (err) => {
        if(err) return console.log(err);
        console.log(path+' - Created Successfully!');
    });
 }

printer(mca.multiChoiceAnswers);

//printer(iu.insertUsers);


