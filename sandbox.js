let fs = require('fs');
let locations = require('./processed/values').values;
let formattedLocations =[];
let data = "";
    
locations.forEach(el => {
    let location = el.split("\t");
    formattedLocations.push('\n[\n  "'+location[0]+'",\n  "'+location[1]+'"\n]');
})

data = formattedLocations.toString();

fs.writeFile('processed/temp.txt', data, (err) => {
    if(err) return console.log(err);
    console.log('temp.txt - Created Successfully!');
});