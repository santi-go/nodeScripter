exports.insertUsers = {
    values: [],
    formattedLocations: [],
    parts: [
        "(GETUTCDATE(), @SiteID, @US_RegionID, @WI_UserID, N'",
        "', N'",
        "', N'",
        "', GETDATE(), 1, 1, 1, 1, 1, 0, '1900-01-01 00:00:00.000', 0, 0),\n"
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
            lines.push(e.parts[0]+el[0]+e.parts[1]+el[0]+e.parts[2]+el[0]+e.parts[3]);
        });
        
        return lines;
    }
}