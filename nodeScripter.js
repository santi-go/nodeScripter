let fs = require('fs');
let mca = require('./modules/multiChoiceAnswers')
let iu = require('./modules/insertUsers')
let cm = require('./modules/cbMapper');
let us = require('./modules/updateUsers');
let ua = require('./modules/updateAnswers');
let ipc = require('./modules/insertPubCode');
let gi = require('./modules/generalInsert');
let rd = require('./modules/removeDuplicates');
let chosenModule = process.argv.slice(2).toString();

function printer(e) {
    e.values = rawToArray();
    createfile('processed/script.sql', assembler(e)); 
}

function rawToArray() {
    let raw = fs.readFileSync('./samples/raw.txt', 'utf-8').split("\n");
    let formatted =[];

    raw.forEach(el => {
        el = el.slice(0,-1)
        formatted.push(el);
        //formatted.push('"'+el+'"');
    })
    
    return formatted; 
}

function createfile(path, data) {
    fs.writeFile(path, data, (err) => {
        if(err) return console.log(err);
        console.log(path+' - Created Successfully!');
    });
 }

function assembler(e) {
    return e.assambler(e).join("");
}

function nodeScripter(module) {
    switch(module) {
        case 'insert-users':
            printer(iu.insertUsers);
            break;
        case 'multi-choice-answers':
            printer(mca.multiChoiceAnswers);
            break;
        case 'insert-pub-code':
            printer(ipc.insertPubCode);
            break;
        case 'cb-mapper':
            printer(cm.cbMapper);
            break;
        case 'update-users':
            printer(us.updateUsers);
            break;
        case 'update-answers':
            printer(ua.updateAnswers);
            break;
        case 'general-insert':
            printer(gi.generalInsert);
            break;
        case 'remove-duplicates':
            printer(rd.removeDuplicates);
            break;
        default:
            console.log('Please enter a valid module name');        
    }
}

nodeScripter(chosenModule);
