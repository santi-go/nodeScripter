exports.insertUsers = {
    values: [],
    formattedLocations: [],
    parts: [
        "(@SiteID, 0, '2021-05-01 00:00:00.000', '2021-05-01 00:00:00.000', N'",
        "', N'",
        "', N'franchisee', 1, 0, 0, 0, N'district', 0),\n"
    ],
    formatter: (e) => {
        e.values.forEach(el => {
            let location = el.split("\t");
            e.formattedLocations.push(location);
        })

        return e.formattedLocations;
    },
    assambler: (e)  => {
        let values = e.formatter(e);
        let lines = [];

        values.forEach((el) => {
            lines.push(e.parts[0]+el[0]+e.parts[1]+el[0]+e.parts[2]);
        });
        
        return lines;
    }
}

//(@SiteID, 0, '2021-05-01 00:00:00.000', '2021-05-01 00:00:00.000', N'palceholder', N'palceholder', N'franchisee', 1, 0, 0, 0, N'district', 0)