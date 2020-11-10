let fs = require('fs');

let path = 'processed/sorted.txt' 
let chef = [];
let data = []

function rawToArray() {
    let raw = fs.readFileSync('./samples/raw.txt', 'utf-8').split("\n");
    let formatted =[];

    raw.forEach(el => {
        //el = el.slice(0,-1)
        formatted.push(el);
    })
    
    return formatted; 
}

chef = rawToArray();

chef.sort().forEach( (e) => {
    data.push(e);   
})

fs.writeFile(path, data, (err) => {
    if(err) return console.log(err);
    console.log(path+' - Created Successfully!');
});