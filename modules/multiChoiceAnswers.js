exports.multiChoiceAnswers = {
    values: [],
    parts: [
        "(@SiteID, @Lang, @Device, 'group_xxx', ",
        ", ",
        ", NULL, '",
        "', NULL),\n"
    ],
    tags: "Wisconsin",
    indexOffset: 269,
    assambler: (e)  => {
        let lines = [];

        e.values.forEach((el, index) => {
            let sortNumber = (index+1) + e.indexOffset;
            el = "'"+el+"'";
            
            lines.push(e.parts[0]+sortNumber+e.parts[1]+el+e.parts[1]+el+e.parts[1]+el+e.parts[2]+e.tags+e.parts[3]);
        });
        
        return lines;
    }
    
      
}