let fs = require('fs');
let mca = require('./multiChoiceAnswers')
let iu = require('./insertUsers')

function printer(e) {
    tranmute()
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

function tranmute() {
    let led = fs.readFileSync('./raw.txt', 'utf-8').split("\n");
    
    let gold =[];
    let parts = [
        "exports.values = [",
        "];"
    ];

    led.forEach(el => {
        el = el.slice(0,-1)
        gold.push('"'+el+'"');
    })
    
    let script = gold.toString()
    let data = parts[0]+script+parts[1];

    fs.writeFile('proccesed/values.js', data, (err) => {
        if(err) return console.log(err);
        console.log('values.js - Created Successfully!');
    });
 }

//printer(mca.multiChoiceAnswers);

printer(iu.insertUsers);
