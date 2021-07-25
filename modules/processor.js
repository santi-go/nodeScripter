exports.rawProcess= {
    format: (raw) => {
        let formatted = [];

        raw.forEach(r => {
            let row = r.split("\t");
            formatted.push(row);
        })
    
        return formatted;
    },

    assemble: (formatted, config)  => {
        let rows = [];
        let sections = config['sections'];
        let order = config['order'];

        formatted.forEach((el) => {
            rows.push(eval(order));
        });
        
        return rows.join("");
    }
}