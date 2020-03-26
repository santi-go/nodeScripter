let fs = require('fs');
let mca = require('./modules/multiChoiceAnswers')
let iu = require('./modules/insertUsers')
let cm = require('./modules/cbMapper');
let us = require('./modules/updateUsers');
let ipc = require('./modules/insertPubCode');

function printer(e) {
    e.values = rawToArray();
    createfile('processed/script.sql', assembler(e)); 
}

function assembler(e) {
    return e.assambler(e).join("");
}

function rawToArray() {
    let raw = fs.readFileSync('./samples/raw.txt', 'utf-8').split("\n");
    let formatted =[];

    raw.forEach(el => {
        el = el.slice(0,-1)
        formatted.push('"'+el+'"');
    })
    
    return formatted; 
}

 function createfile(path, data) {
    try {
        fs.writeFile(path, data, (err) => {
            if(err) return console.log(err);
            console.log(path+' - Created Successfully!');
        });
    } catch (error) {
        console.log(error);
        
    }
 }

printer(mca.multiChoiceAnswers);

//printer(iu.insertUsers);

//printer(cm.cbMapper);

//printer(us.updateUsers);

//printer(ipc.insertPubCode);
