exports.generalInsert = {
    values: [],
    formattedLocations: [],
    parts: [
        "((SELECT UserID FROM Users WHERE SiteID = @SiteID AND Username = '",
        "'), 'store', (SELECT LocationID FROM Locations WHERE SiteID = @SiteID AND DashboardName = '",
        "')),\n"
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
            lines.push(e.parts[0]+el[0]+e.parts[1]+el[1]+e.parts[2]);
        });
        
        return lines;
    }
}

//((SELECT UserID FROM Users WHERE SiteID = @SiteID AND Username = 'Alex.Young1@asu.edu'), 'store', (SELECT LocationID FROM Locations WHERE SiteID = @SiteID AND DashboardName = 'Amy Gordon')),