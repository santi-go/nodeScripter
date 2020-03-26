exports.multiChoiceAnswers = {
    values: [],
    parts: [
        "(@SiteID, @Lang, @Device, 'group_100', ",
        ", ",
        ", NULL, 'farmhouseinns-', NULL),\n"
    ],
    indexOffset: 0,
    assambler: (e)  => {
        let lines = [];

        e.values.forEach((el, index) => {
            let sortNumber = (index+1) + e.indexOffset;
            el = "'"+el+"'";
            
            lines.push(e.parts[0]+sortNumber+e.parts[1]+el+e.parts[1]+el+e.parts[1]+el+e.parts[2]);
        });
        
        return lines;
    },
    reference: "(@SiteID, @Lang, @Device, 'group_100', 244, 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', NULL, 'belhaven', NULL),"
    
      
}