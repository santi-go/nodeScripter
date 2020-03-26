let dt = require('../samples/values')

exports.insertPubCode = {
    values: dt.values,
    formattedLocations: [],
    parts: [
        "('",
        "', '",
        "', '",
        "'),\n"
    ],
    formatter: (e) => {
        e.values.forEach(el => {
            let location = el.split("\t");
            e.formattedLocations.push(location);
        })

        return e.formattedLocations;
    },
    assambler: (e) => {
        let values = e.formatter(e); 
        let lines = [];

        values.forEach((el) => {
            lines.push(e.parts[0]+el[2]+e.parts[1]+el[1]+e.parts[2]+el[0]+e.parts[3]);
        });
        
        return lines;
    },
    reference: "('12345', 'tEST nAME', 'tEST bRAND')",
}