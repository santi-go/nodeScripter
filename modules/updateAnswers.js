exports.updateAnswers = {
    values: [],
    formattedLocations: [],
    parts: [
        "UPDATE SurveyAnswers SET Answer = '",
        "' FROM SurveyAnswers INNER JOIN Surveys ON SurveyAnswers.SurveyID = Surveys.SurveyID INNER JOIN Locations ON Surveys.LocationID = Locations.LocationID  WHERE SiteID = 699 AND QuestID IN (1, 100) AND Answer = '",
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
            lines.push(e.parts[0]+el[1]+e.parts[1]+el[0]+e.parts[2]);
        });
        
        return lines;
    },
    reference: "UPDATE SurveyAnswers SET Answer = 'Abbey Fields (Kenilworth)'FROM SurveyAnswersINNER JOIN Surveys ON SurveyAnswers.SurveyID = Surveys.SurveyIDINNER JOIN Locations ON Surveys.LocationID = Locations.LocationID WHERE SiteID = 699AND QuestID IN (1, 100)AND Answer = 'Abbey Fields, Kenilworth'"
}