exports.cbMapper = {
    values : [],
    assambler: (e) => {
        let formattedLocations =[];
            
        e.values.forEach(el => {
            let location = el.split("\t");
            //formattedLocations.push('\n[\n  "'+location[0]+'",\n  "'+location[1]+'"\n],');
            formattedLocations.push('\n"'+location[0]+'" : "'+location[1]+'",');
        })

        return formattedLocations.sort();
    }
}