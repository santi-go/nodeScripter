let fs = require('fs');
let mca = require('./modules/multiChoiceAnswers')
let iu = require('./modules/insertUsers')
let cm = require('./modules/cbMapper');
let us = require('./modules/updateUsers');
let ipc = require('./modules/insertPubCode');

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
    let raw = fs.readFileSync('./samples/raw.txt', 'utf-8').split("\n");
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
        createfile('samples/values.js', data);//devuelve true y aún no crea el values.js, esto no sirve.
        return true;
    } else {
        return false;
    }  
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

//printer(mca.multiChoiceAnswers);

printer(iu.insertUsers);

//printer(cm.cbMapper);

//printer(us.updateUsers);

//printer(ipc.insertPubCode);
