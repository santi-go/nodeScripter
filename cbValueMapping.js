let dt = require('./processed/values');

exports.cbValueMapping = {
    values : dt.values,
    assambler: (e) => {
        let formattedLocations =[];
        let data = "";
            
        e.values.forEach(el => {
            let location = el.split("\t");
            formattedLocations.push('\n[\n  "'+location[0]+'",\n  "'+location[1]+'"\n]');
        })
        
        data = formattedLocations.toString();

        return data;
    }
}