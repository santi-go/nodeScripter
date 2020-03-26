exports.updateUsers = {
    values: [],
    formattedLocations: [],
    parts: [
        "UPDATE Locations SET DashboardName = '",
        "', SurveyName = '",
        "', LocationCode ='",
        "', Tags = '",
        "' WHERE SiteID = @SiteID AND LocationID = '",
        "';\n"
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
            lines.push(e.parts[0]+el[0]+e.parts[1]+el[0]+e.parts[2]+el[0]+e.parts[3]+el[1]+e.parts[4]+el[2]+e.parts[5]);
        });
        
        return lines;
    },
    reference: "UPDATE Locations SET DashboardName = '', SurveyName = '', LocationCode = '', Tags = '' WHERE SiteID = @SiteID AND LocationID = '';"
}