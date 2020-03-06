let fs = require('fs');
let mca = require('./multiChoiceAnswers');
let iu = require('./insertUsers');
let cvm = require('./cbValueMapping');

function printer(e) {
    let scriptName = "";

    if(e.type == "sql") {
        scriptName = "processed/script.sql";
    } else {
        scriptName = "processed/values.txt"
    }
    
    if(rawToModule()) {
        createfile(scriptName, assembler(e));
    } else {
        console.log("Something went wrong :(")
    }   
}

function assembler(e) {
    if(e.type == "sql") {
        return e.assambler(e).join("");
    }

    return e.assambler(e);
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
//printer(iu.insertUsers);
printer(cvm.cbValueMapping)


