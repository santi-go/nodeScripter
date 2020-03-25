let fs = require('fs');
let mca = require('./multiChoiceAnswers')
let iu = require('./insertUsers')
let cm = require('./cbMapper');
let us = require('./updateUsers');
let ipc = require('./insertPubCode');

function printer(e) {
    if(rawToModule()) {
        createfile('processed/script.sql', assembler(e));
    } else {
        console.log("Something went wrong :(")
    }   
}

function assembler(e) {
    return e.assambler(e).join("");
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

    if(data.length > 20) {
        createfile ('processed/values.js', data);
        return true;
    } else {
        return false;
    }  
 }

 function createfile(path, data) {
    fs.writeFile(path, data, (err) => {
        if(err) return console.log(err);
        console.log(path+' - Created Successfully!');
    });
 }

//printer(mca.multiChoiceAnswers);

printer(iu.insertUsers);

//printer(cm.cbMapper);

//printer(us.updateUsers);

//printer(ipc.insertPubCode);
