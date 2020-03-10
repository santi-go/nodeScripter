let dt = require('./processed/values')

exports.insertUsers = {
    values: dt.values,
    parts: [
        "(GETUTCDATE(), @SiteID, (SELECT RegionId FROM Regions WHERE SiteID = @SiteID AND DashboardName = 'Default Region'), (SELECT UserId FROM Users WHERE SiteID = @SiteID AND Username = ",
        "), N",
        ", N",
        ", NULL, NULL, NULL, NULL, NULL, N",
        ", NULL, NULL, NULL, '2020-01-28 00:00:00.000', NULL, 1, 1, 1, 1, 1, 0, '1900-01-01 00:00:00.000', 0, 0, NULL, NULL, NULL, NULL, NULL),\n"
    ],
    reference: [
        "(GETUTCDATE(), @SiteID, (SELECT RegionId FROM Regions WHERE SiteID = @SiteID AND DashboardName = 'Default Region'), (SELECT UserId FROM Users WHERE SiteID = @SiteID AND Username = 'Chef & Brewer'), N'Boathouse, Peterborough', N'Boathouse, Peterborough', NULL, NULL, NULL, NULL, NULL, N'Boathouse, Peterborough', NULL, NULL, NULL, '2020-01-28 00:00:00.000', NULL, 1, 1, 1, 1, 1, 0, '1900-01-01 00:00:00.000', 0, 0, NULL, NULL, NULL, NULL, NULL),        "
    ],
    indexOffset: 0,
    userName: "'Chef & Brewer'",
    type: "sql",
    assambler: (e)  => {
        let lines = [];

        e.values.forEach((el) => {
            el = "'"+el+"'";
            lines.push(e.parts[0]+e.userName+e.parts[1]+el+e.parts[2]+el+e.parts[3]+el+e.parts[4]);
        });
        
        return lines;
    }
}