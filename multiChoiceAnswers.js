let dt = require('./proccesed/values')

exports.multiChoiceAnswers = {
    values: dt.values,
    parts: [
        "(@SiteID, @Lang, @Device, 'group_100', ",
        ", ",
        ", NULL, 'belhaven', NULL),\n"
    ],
    reference: [
        "(@SiteID, @Lang, @Device, 'group_100', 244, 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', NULL, 'belhaven', NULL),"
    ],
    sequence : "parts[0]+sortNumber+parts[1]+el+parts[1]+el+parts[1]+el+parts[2]",
    indexOffset: 0,
    assambler: (e)  => {
        let lines = [];

        e.values.forEach((el, index) => {
            let sortNumber = (index+1) + e.indexOffset;
            
            lines.push(e.parts[0]+sortNumber+e.parts[1]+el+e.parts[1]+el+e.parts[1]+el+e.parts[2]);
        });
        
        return lines;
    }  
}