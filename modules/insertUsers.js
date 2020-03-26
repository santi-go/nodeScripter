let dt = require('../samples/values')

exports.insertUsers = {
    values: dt.values,
    formattedLocations: [],
    parts: [
        "(GETUTCDATE(), @SiteID, (SELECT RegionId FROM Regions WHERE SiteID = @SiteID AND DashboardName = 'Default Region'), (SELECT UserId FROM Users WHERE SiteID = @SiteID AND Username = '",
        "'), N'",
        "', N'",
        "', NULL, NULL, NULL, NULL, NULL, N'",
        "', NULL, NULL, '",
        "', '2020-01-28 00:00:00.000', NULL, 1, 1, 1, 1, 1, 0, '1900-01-01 00:00:00.000', 0, 0, NULL, NULL, NULL, NULL, NULL),\n"
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
            lines.push(e.parts[0]+el[0]+e.parts[1]+el[1]+e.parts[2]+el[1]+e.parts[3]+el[1]+e.parts[4]+el[2]+e.parts[5]);
        });
        
        return lines;
    },
    reference: "(GETUTCDATE(), @SiteID, (SELECT RegionId FROM Regions WHERE SiteID = @SiteID AND DashboardName = 'Default Region'), (SELECT UserId FROM Users WHERE SiteID = @SiteID AND Username = 'Chef & Brewer'), N'Boathouse, Peterborough', N'Boathouse, Peterborough', NULL, NULL, NULL, NULL, NULL, N'Boathouse, Peterborough', NULL, NULL, NULL, '2020-01-28 00:00:00.000', NULL, 1, 1, 1, 1, 1, 0, '1900-01-01 00:00:00.000', 0, 0, NULL, NULL, NULL, NULL, NULL),"
}